import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonAnimated = () => (
  <div>
    <Button animated>
      <Button.Content visible>Swap Currencies</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
  </div>
)

export default ButtonAnimated