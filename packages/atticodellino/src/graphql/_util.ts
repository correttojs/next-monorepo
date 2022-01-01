export const getLangByPhone = (phone: string) =>
  /\+39/.test(phone) ? "it" : "en";

type Props = {
  phone?: string | null;
  hash?: string | null;
  id?: string | null;
};

export const faqLink = ({ phone, hash }: Props) =>
  `https://www.atticodellino.com/${getLangByPhone(
    phone ?? ""
  )}/faq?hash=${hash}`;

export const registerLink = ({ phone, hash }: Props) =>
  `https://www.atticodellino.com/${getLangByPhone(
    phone ?? ""
  )}/register?hash=${hash}`;
