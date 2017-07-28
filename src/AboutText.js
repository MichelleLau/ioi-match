import React, { Component } from 'react'
import { Container, Segment, Image } from 'semantic-ui-react'


class AboutText extends Component {

  render() {

    return (
      <Container text textAlign='justified'>
        <h3>IOI Match</h3>
        <p>IOI Match (Indication of Interest) is an anonymous pre-matching block trading mechanism designed to create a safer and more efficient block trading market. IOI Match combines a reputation system with a ranked voting algorithm to create an incentive for brokers to police investor behavior and remove bad actors. IOI Match could work with most asset classes, but this demo is for an equity market implementation.</p>
        <h3>Sponsorship</h3>
        <p>To participate, an investor must be sponsored by a broker. In this demo; brokers, investors and their sponsorship relationships have been pre-seeded.</p>
        <h3>IOIs</h3>
        <p>Investors enter indications of interest, which must include the stock, a side and a ranked list of brokers.</p>
        <Image
          src='/Assets/ioi.gif'
          size='huge'
          bordered={true}
          />
        <h3>Matches</h3>
        <p>A match occurs when, at least, one buyer and, at least, one seller enters an IOI in the same stock and they share, at least, one common broker.</p>
        <Image
          src='/Assets/match.gif'
          size='huge'
          bordered={true}
          />
        <h3>Ranked Voting Algorithm</h3>
        <p>When more then one common broker exists, a ranked voting algorithm determines which broker “wins” based on "votes" from the ranked broker lists.</p>
        <Image
          src='/Assets/rankedVoting.gif'
          size='huge'
          bordered={true}
          />
        <h3>Negotiations</h3>
        <p>The winning broker recieves the stock and investor information and attempts to negotiate a transaction. When the negotiation is finished, the broker updates each investor as either having traded or not traded the negotiation as complete.</p>
        <Image
          src='/Assets/negotiation.gif'
          size='huge'
          bordered={true}
          />
        <h3>Incentives</h3>
        <p>Brokers and investors each have a conversion score (the percentage of negotiations that resulted in a trade vs. their total number of negotiations). Investors have access to the conversion scores of their sponsor brokers and brokers have access to the conversion scores of the investors they sponsors.</p>
        <p>Investors can use this information to determine how to rank their brokers, providing brokers with a strong incentive to only sponsor investors who enter IOIs when the intent to transact.</p>
        <p>Additionally, investors can rank a brokers performance for each negotiation and investors have access to the cumulated rating of their sponsor brokers. A broker’s rating can add context to its conversion score as there maybe times when a broker acts in the best interest of an investor by managing a negotiation that does not result in a transaction.</p>
        <Image
          src='/Assets/rating.gif'
          size='huge'
          bordered={true}
          />
      </Container>
    )
  }
}

export default AboutText
