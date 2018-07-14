import styled from 'styled-components';

export const CompareListWrapper = styled.div`
  display: inline-block;
  width: 300px;
  padding: 10px;
  margin-top: 146px;
`;

export const CompareItem = styled.div`
  padding: 5px;
  margin: 5px;
  border: 1px solid #d7eaf7;
  font-size: 13px;
  background: #d7eaf7;
  &:last-child {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  height: 40px;
  width: 500px;
  border: 1px solid #106fb1;
  border-radius: 6px;
  padding: 10px;
  background: #FFFF;
  font-size: 14px;
  color: #666;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 560px;
  margin: auto;
  text-align: center;
  padding: 50px 0;
`;

export const NoData = styled.div`
  color: #bab8b8;
  font-size: 14px;
  text-align:center;
  padding:10px;
`;

export const SearchResultDropDown = styled.div`
  position: absolute;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #c8c8c8;
  padding: 10px;
  font-size :12px;
  font-weight: bold;
  text-align: left;
  color : #666;
  background-color: #FFF;
  z-index: 2;
  margin-top :10px;
  width: 500px;
`;

export const ShowMore = styled.div`
  color: #106fb1;
  cursor: pointer;
  font-size :12px;
  font-weight: bold;
  padding: 5px;
  background-color: rgba(250, 250, 250, 0.85);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  text-align:  center;
  margin: 10px;
  margin-top: ${(props) => (props.compare ? '20px' : '10px')};
  
`;

export const SearchItem = styled.div`
  padding: 10px 0;
  // color: #106fb1;
  cursor: pointer;
  border-bottom: 1px solid #e4e4e4;
  &:hover {
    text-decoration: underline;
  }
`;

export const BackDrop = styled.div`
  position: fixed;
  background-color:transparent;
  width: 100%;
  height: 100%;
  left : 0;
  top : 0;
  z-index: -1;
`;

export const ContentContainer = styled.div`
  padding:10px;
  position: relative;
`;

export const ContentWrapper = styled.div`
  width: calc(100% - 300px);
  vertical-align: top;
  display: inline-block;
`;

export const CloseLink = styled.span`
  position: relative;
  top: 2px;
  font-size: 16px;
  color: #106fb1;
  &:hover {
    font-weight: bold;
  }
  cursor: pointer;
  position: relative;
  top: -2px;
  display: inline-block;
  vertical-align: top;
  padding: 0 5px;
  height: 10px;
`;

export const FundName = styled.div`
  width: calc(100% - 20px);
  display: inline-block;
`;

export const SpinnerContainer = styled.div`
position: fixed;
background-color:transparent;
width: 100%;
height: 100%;
left : 0;
top : 0;
z-index: 5;
padding-left: 50%;
padding-top: 25%
`;

export const SearchLoader = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 50px;
`;