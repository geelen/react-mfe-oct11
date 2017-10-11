import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const height = '4rem'

const Wrapper = styled.div`
  background: #eee;
  height: calc(100vh - ${ height });
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Entry = styled.div`
  display: flex;
  padding: 1rem;
`

const Avatar = styled.img`
  margin-right: 1rem;
  border-radius: 0.5rem;
  width: ${ height };
  height: ${ height };
  ${ props => props.special && `
    box-shadow: 0 0 4px limegreen; 
  ` }
`

const Lines = styled.div`
  line-height: 1.4;
`

const ChatWindow = ({ messages }) => (
  <Wrapper>
    {
      messages.map((entry, i) => (
        <Entry key={i}>
          <Avatar special={i % 2 === 1}
                  src={entry.avatar_url}
                  alt={entry.name}/>
          <Lines>
            {
              entry.lines.map((line, i) => (
                <div key={i}>{line}</div>
              ))
            }
          </Lines>
        </Entry>
      ))
    }
  </Wrapper>
)

export default connect(
  store => ({
    messages: store.messages
  })
)(ChatWindow)
