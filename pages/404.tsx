import styled from "styled-components";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../_constants";
import NotFoundImage from "../public/not_found.svg";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <Wrapper>
      <Image
        src={NotFoundImage}
        alt="não encontrado"
        width={200}
        height={200}
        objectFit="contain"
      />
      <h1>Página não encontrada</h1>
      <Link legacyBehavior href="/" passHref>
        <BackToHome>Voltar para a Home</BackToHome>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
`;

const BackToHome = styled.a`
  color: ${(p) => p.theme.primaryBackground};
  text-decoration: none;
`;
