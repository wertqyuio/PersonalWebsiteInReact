import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Example = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button id={"Popover" + props.id} type="button">
        {props.title}
      </Button>
      <Popover trigger="focus" placement="bottom" isOpen={popoverOpen} target={"Popover" + props.id} toggle={toggle}>
        <PopoverHeader>{props.title}</PopoverHeader>
        <PopoverBody>{props.description}</PopoverBody>
      </Popover>
    </div>
  );
}

export default Example;