import styled from "styled-components";
import { Thumbnail as ImgThumbnail } from "exo-ui";
import { Content } from "exo-ui";

export const Thumbnail = styled(ImgThumbnail)`
  width: 64px;
  height: 64px;
`;

export const TextSmall = styled.span`
  display: block;
  color: #717171;
  font-size: 0.85em;
`;

export const TextBold = styled.span`
  color: #323232;
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
`;

export const Describe = styled.th`
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
  text-align: left;
  font-weight: normal;
`;

export const LastItem = styled(Content)`
  width: 100%;
  text-align: right;
`;
