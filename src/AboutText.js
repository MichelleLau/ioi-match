import React, { Component } from 'react'
import { Grid, Container, Segment, Image, Accordion, Icon, Header } from 'semantic-ui-react'


class AboutText extends Component {

  render() {

    return (
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={14}>
            <Container textAlign='justified'>
              <Header as='h3' content='Description' />
              <p>IOI Match (Indication of Interest) is an anonymous pre-matching block trading mechanism designed to create a safer and more efficient block trading market. IOI Match combines a reputation system with a ranked voting algorithm to create an incentive for brokers to police investor behavior and remove bad actors. IOI Match could be implemented for any asset classes, but this demo is focused on an equity market implementation.</p>

              <Header as='h3' content='Key Features' />

              <Accordion
                exclusive={true}
                >
                <Accordion.Title>
                  <Header as='h3'>
                    <Icon name='dropdown' />
                    Sponsorship
                  </Header>
                </Accordion.Title>
                <Accordion.Content>
                  <p>To participate, an investor must be sponsored by a broker. A broker is not obligated to sponsor an investor and should only sponsor investors who only send IOIs when they intend to trade.  In this demo; brokers, investors and their sponsorship relationships have been seeded and are static. In a real world implementation brokers would have the ability to add and delete sponsorships.</p>
                </Accordion.Content>

                <Accordion.Title>
                  <Header as='h3'>
                    <Icon name='dropdown' />
                    IOIs and Ranked Broker Lists
                  </Header>
                </Accordion.Title>
                <Accordion.Content>
                  <p>Only an investor can enter an indications of interest. All IOIs must include the stock, a side and a ranked list of brokers. An investor can only include brokers from their list of sponsors and may choose to include all or a subset of the full list.</p>
                  <Image
                    src='/Assets/ioi.gif'
                    size='massive'
                    bordered={true}
                    />
                </Accordion.Content>

                <Accordion.Title>
                  <Header as='h3'>
                    <Icon name='dropdown' />
                    Matches
                  </Header>
                </Accordion.Title>
                <Accordion.Content>
                  <p>A match occurs when, at least, one buyer and, at least, one seller enters an IOI in the same stock and they share, at least, one common broker.</p>
                  <Image
                    src='/Assets/match.gif'
                    size='massive'
                    bordered={true}
                    />
                </Accordion.Content>

                <Accordion.Title>
                  <Header as='h3'>
                    <Icon name='dropdown' />
                    Ranked Voting Algorithm
                  </Header>
                </Accordion.Title>
                <Accordion.Content>
                  <p>When more then one common broker exists, a ranked voting algorithm determines which broker “wins” based on "votes" from the ranked broker lists.</p>
                  <Image
                    src='/Assets/rankedVoting.gif'
                    size='massive'
                    bordered={true}
                    />
                </Accordion.Content>

                <Accordion.Title>
                  <Header as='h3'>
                    <Icon name='dropdown' />
                    Negotiations
                  </Header>
                </Accordion.Title>
                <Accordion.Content>
                  <p>The winning broker recieves the stock and investor information and manages a negotiation between the investors. When the negotiation is finished, the broker updates each investor as either having traded or not traded and the negotiation as complete.</p>
                  <Image
                    src='/Assets/negotiation.gif'
                    size='massive'
                    bordered={true}
                    />
                </Accordion.Content>

                <Accordion.Title>
                  <Header as='h3'>
                    <Icon name='dropdown' />
                    Incentives
                  </Header>
                </Accordion.Title>
                <Accordion.Content>
                  <p>IOI Match maintains a trade conversion score for all brokers and investors (the percentage of negotiations that result in a trade). A negotition, for example, that includes three investors where two trade and one does not would result in a 100% conversion score for the two trading participants, 0% for the non-trading participant and 66% for the broker managing the negotition.</p>
                  <p>Investors have access to the conversion scores of their sponsor brokers and brokers have access to the conversion scores of the investors they sponsor and any investor requesting sponsorship.</p>
                  <p>Investors can use this information to determine how to rank their brokers, providing brokers with an incentive to only sponsor investors who enter IOIs when the intent to transact.</p>
                  <p>Additionally, investors can rate a brokers performance for each negotiation, adding context to a conversion score as there maybe times when a broker acts in the best interest of an investor by managing a negotiation that does not result in a trade.</p>
                  <Image
                    src='/Assets/rating.gif'
                    size='massive'
                    bordered={true}
                    />
                </Accordion.Content>
              </Accordion>

            </Container>

          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default AboutText
