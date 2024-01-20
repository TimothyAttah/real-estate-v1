import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../themes';

export const ListingContainer = styled(motion.div)`
  max-width: 400px;
  width: 100%;
  height: 500px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  box-shadow: 0 3rem 3rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
  margin-top: 30px;
`;
export const ListingWrapper = styled.div`
  height: 100%;
`;
export const ListingImageWrapper = styled.div`
  height: 300px;
  img {
    height: 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
`;
export const ListingInfoContainer = styled.div`
  padding: 10px;
  small {
    color: ${theme.color.linkColor};
    text-transform: uppercase;
    border-bottom: 1px solid ${theme.color.linkColor};
  }
  h5 {
    font-size: 13px;
    line-height: 22px;
    color: ${theme.color.bgLight};
    margin: 10px 0;
  }

  p {
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: ${theme.color.linkColor};
    font-weight: 400;
    gap: 10px;

    svg {
      color: ${theme.color.textColor2};
    }
  }
`;
export const ListingNumOf = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: ${theme.color.textColor};
    font-weight: 700;

    svg {
      color: ${theme.color.textColor2};
    }
  }
`;
// export const ListingContainer = styled.div``;
// export const ListingContainer = styled.div``;
// export const ListingContainer = styled.div``;
