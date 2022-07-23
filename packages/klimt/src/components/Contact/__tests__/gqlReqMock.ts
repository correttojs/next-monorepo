const mockedBunny = jest.fn()

jest.mock(
  '@packages/utils/gqlRequest',
  () => mockedBunny
)

export default mockedBunny