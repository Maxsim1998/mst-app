import styled from 'styled-components';

export const Wrap = styled.div`
  margin-bottom: 15px;
  position: relative;
  cursor: pointer;
`;

export const Content = styled.div`
  border-radius: 6px;
  width: 300px;
  overflow: hidden;
`;

export const IconWrap = styled.div`
  position: absolute;
  top: -5px;
  left: -5px;
`;

export const Photo = styled.div`
  background-image: url(${({ photosrc }) => photosrc});
  background-color: ${({ color }) => color};
  width: 300px;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const Info = styled.div`
  background-color: #000;
  opacity: 0.6;
  height: 100%;
  height: 50px;
  padding: 5px;
`;
