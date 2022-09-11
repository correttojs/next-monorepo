import { ActionArgs } from './createAction';

interface Inputs {
    issueNumber: number;
    commentAuthor?: string;
    bodyIncludes: string;
    direction?: string;
}

interface Comment {
    id: number;
    body?: string;
    user: {
        login: string;
    } | null;
}

function findCommentPredicate(inputs: Inputs, comment: Comment): boolean {
    return (
        (inputs.commentAuthor && comment.user ? comment.user.login === inputs.commentAuthor : true) &&
        (inputs.bodyIncludes && comment.body ? comment.body.includes(inputs.bodyIncludes) : true)
    );
}

export const findComment = async (args: ActionArgs, inputs: Inputs): Promise<Comment | undefined> => {
    const { github, context } = args;

    const parameters = {
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: inputs.issueNumber,
    };

    if (inputs.direction == 'first') {
        for await (const { data: comments } of github.paginate.iterator(github.rest.issues.listComments, parameters)) {
            // Search each page for the comment
            const comment = comments.find((comment: Comment) => findCommentPredicate(inputs, comment));
            if (comment) return comment;
        }
    } else {
        // direction == 'last'
        const comments = await github.paginate(github.rest.issues.listComments, parameters);
        comments.reverse();
        const comment = comments.find((comment: Comment) => findCommentPredicate(inputs, comment));
        if (comment) return comment;
    }
    return undefined;
};
