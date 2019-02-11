import styled, { css } from "styled-components";

const color = {
  blue: "#105783"
};

export const SwiperWrapper = styled.div`
  position: relative;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 -60px;
  padding: 0 60px;
  mask-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, rgba(0, 0, 0, 0)),
    color-stop(0.05, rgba(0, 0, 0, 1)),
    color-stop(0.95, rgba(0, 0, 0, 1)),
    color-stop(1, rgba(0, 0, 0, 0))
  );
  overflow: hidden;
`;

const arrowStyles = css`
  cursor: pointer;
  background: #fff;
  border: 0;
  color: ${color.blue};
  border-radius: 4px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  font-size: 12px;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  margin-top: -15px;
  z-index: 1;
  transition: 0.3s opacity;
`;

export const ArrowLeft = styled.button`
  ${arrowStyles};
  opacity: ${props => (props.faded ? 0.25 : 1)};
  left: -50px;
`;

export const ArrowRight = styled.button`
  ${arrowStyles};
  opacity: ${props => (props.faded ? 0.25 : 1)};
  right: -50px;
`;

export const Item = styled.div`
  transition: 0.3s left;
  position: relative;
  left: -${props => props.currentIndex * 33.33 - props.slideOffset}%;
  width: ${props => 100 / props.itemsWide}%;
  flex: 0 0 ${props => 100 / props.itemsWide}%;
  display: flex;
`;