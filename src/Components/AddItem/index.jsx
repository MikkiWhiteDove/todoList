import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Layout } from 'antd';

const { Content } = Layout;

class AddItem extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
      value: '',  
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.value);
    this.setState({ value :  ''});
  }

  handleChange(e) {
    this.setState({ value : e.target.value });
  }

  render () {
    return (
      <Content 
        className="site-layout-background"
        style={{
          display: 'flex',
          margin: '20px 16px',
          padding: 20,
        }}
      >
          <Input onChange={this.handleChange} value={this.state.value} />
          <Button type="submit">Добаить</Button>
       </Content>
    )
  }
}

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default AddItem;
