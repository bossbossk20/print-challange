import styled from 'styled-components'

export const TrackingCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 350px;
  border: 1px solid gray;
  border-radius: 3px;
  margin-bottom: 15px;
  margin-top: 15px;
`

export const TrackingNumberBox = styled.div`
  display: flex;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  margin-bottom: 15px;
  width: 90%;
  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-right: 1px solid #000;
    flex: 5;
    margin-left: 10px;
  }
  .right {
    padding: 0 5px;
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const RecipientBox = styled.div`
  display: flex;
  width: 90%;
  span {
    font-weight: bold;
  }
  margin-bottom: 15px;
`

export const SenderBox = styled.div`
  display: flex;
  width: 90%;
  margin-bottom: 15px;
  padding-right: 10px;
`

export const SenderTextBox = styled.div`
  margin-bottom: 10px;
`

export const Ref1 = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`

export const Ref1Count = styled.div`
  font-size: 16px;
`

export const TrackingNumberText = styled.span`
  font-size: 26px;
  font-weight: bold;
  color: #000;
`

export const Note = styled.div`
  font-size: 12px;
`
export const BarcodeBox = styled.div`
  margin-bottom: 5px;
  margin-top: 10px;
`
