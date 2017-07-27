import React, { Component } from 'react'
import { Container, List } from 'semantic-ui-react'


class AboutText extends Component {

  render() {

    return (
      <Container textAlign='justified'>
        <h3>About</h3>
        <p>Indication of Interest (IOI) Match is a toy example of how non-financial mechanisms could be combined to create safer and more efficient financial market trading systems.  Specifically, IOI Match combines a reputation system and a ranked voting algorithm to create incentives to align the interests of agents and principals. </p>
        <h3>Key Features:</h3>
        <List bulleted>
        <List.Item><p>An annonymous pre-match minimizes information leakage.</p></List.Item>
        <List.Item><p>An indirect reputation system incentivizes agents to keep bad actors out of IOI Match.</p></List.Item>
        </List>
        <h3> Use Case:</h3>
        <List bulleted>
          <List.Item>
            <p>IOI Match could be implemented in any market that requires principals to transact through an agent, but this demo is designed for an institution equity block market implementation.</p>
          </List.Item>
          <List.Item>
            <p> An investor (principal) must be sponsored by a broker (agent) to participate.</p>
          </List.Item>
          <List.Item>
            <p>Once sponsored, an investor can enter an IOI, which must include a ranked list of preferred brokers. </p>
          </List.Item>
          <List.Item>
            <p> IOIs remain hidden until there is a match. A match is defined as at least one buy and one sell IOI in the same stock that share at least one common broker. If more than one common broker exists, a broker is chosen by a ranked voting algorithm.</p>
          </List.Item>
          <List.Item>
            <p>Matched IOIs are revealed to the chosen broker who conducts a negotiation between investors outside of IOI match. When the negotation ends, the broker completes the negotation in IOI Match by marking each investor as either having traded or not traded. The investor can then rate the broker’s service on a scale from 1 - 5.</p>
          </List.Item>
          <List.Item>
            <p>Investors have access the the total percentage of negotations managed by a broker that resulted in a trade (conversion rate) and a brokers overall investor rating.</p>
          </List.Item>
          <List.Item>
            <p>This information should impact where an investor ranks a broker providing an incentive for brokers to only sponsor principals who send IOIs when they want to trade.</p>
          </List.Item>
        </List>
      </Container>
    )
  }
}

export default AboutText
