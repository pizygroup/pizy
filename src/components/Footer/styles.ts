import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  min-height: 500px;

  gap: 4rem;
  padding: 2rem;

  background: var(--black-full);

  > .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    gap: 2rem;
    width: 100%;

    position: relative;

    img {
      width: 100%;
      max-width: 120px;

      padding: 1rem;

      filter: invert(1);
    }

    .social {
      display: flex;
      flex-direction: column;

      height: 100%;
      gap: 2rem;

      > a {
        width: 100%;
        max-width: 1.5rem;
        height: 100%;
        max-height: 1.5rem;

        svg {
          fill: var(--white);

          width: 100%;
          max-width: 1.5rem;
        }
      }

      @media (max-width: 900px) {
        flex-direction: row;
      }
    }

    .links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;

      width: 100%;
      max-width: 1000px;

      gap: 2rem;

      > div {
        display: flex;
        flex: 1 1 150px;
        flex-direction: column;

        gap: 1.5rem;

        width: 100%;
        /* min-width: 100px; */

        > span {
          font-size: 1rem;
          text-transform: uppercase;
          font-weight: 600;

          color: var(--white-dark-active);
        }

        > ul {
          display: flex;
          flex-direction: column;

          gap: 1rem;

          > a {
            text-decoration: none;
            color: var(--white);

            &:hover {
              text-decoration: underline;
            }
          }
        }

        @media (max-width: 900px) {
          justify-content: center;
          align-items: center;

          text-align: center;
        }
      }

      @media (max-width: 900px) {
        flex-wrap: nowrap;
        flex-direction: column;
      }
    }

    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 4rem;
    }
  }

  > .legal-content {
    display: flex;
    flex-direction: column;

    gap: 2rem;

    text-align: center;

    > ul {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 1rem;

      > a {
        text-decoration: none;
        color: var(--white-darker);

        &:hover {
          color: var(--white-dark-active);
        }
      }

      @media (max-width: 900px) {
        flex-wrap: wrap;
      }
    }

    > div {
      display: flex;
      flex-direction: column;

      gap: 1rem;
    }

    @media (max-width: 900px) {
      font-size: 0.85rem;
    }
  }
`;
