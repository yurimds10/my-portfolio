import styled from "styled-components";

interface IGridProps {
  width: string;
  gap: string;
}

interface IFlexProps {
  width?: string;
  height?: string;
  direction?: string;
  justify?: string;
  align?: string;
}

export const Container = styled.div`
  max-width: 1168px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  position: relative;

  @media screen and (min-width: 1168px) {
    margin: auto;
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit,
    minmax(${(props: IGridProps) => props.width}, 1fr)
  );
  gap: ${(props: IGridProps) => props.gap};
`;

export const Flex = styled.div`
  width: ${(props: IFlexProps) => props.width};
  height: ${(props: IFlexProps) => props.height};
  display: flex;
  flex-direction: ${(props:IFlexProps) => props.direction};
  justify-content: ${(props:IFlexProps) => props.justify};
  align-items: ${(props:IFlexProps) => props.align};
`;