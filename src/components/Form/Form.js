import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgurl: '',
      name: '',
      price: '',
      preview: 'http://via.placeholder.com/350x150'
    };
    this.handleInput = this.handleInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.getOne = this.getOne.bind(this);
    this.updatePreview = this.updatePreview.bind(this);
  }

  componentDidMount() {
    if(this.props.match.params.id) {
      this.getOne();
    }
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps.match.params.id && !this.props.match.params.id) {
      this.clearInput();
    }
  }

  async getOne() {
    let res = await axios.get(`/api/product/${this.props.match.params.id}`);
    console.log(res);
    let {imgurl, name, price} = res.data[0];

    this.setState({imgurl, name, price});
    this.updatePreview();
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  clearInput() {
    this.setState({imgurl: '', name: '', price: ''});
  }

  createProduct() {
    let {name, price, imgurl} = this.state;
    axios.post('/api/product', {name, price, imgurl})
      .then(() => {
        this.clearInput();
        this.props.history.push('/');
      });
  }

  updateProduct() {
    let {name, price, imgurl} = this.state;
    axios.put(`/api/product/${this.props.match.params.id}`, {name, price, imgurl})
      .then(() => {
        this.clearInput();
        this.props.history.push('/');
      });
  }

  updatePreview() {
    this.setState({preview: this.state.imgurl});
  }

  render() {
    let formButton = <button onClick={this.createProduct}>Add To Inventory</button>
    if(this.props.match.params.id) {
      formButton = <button onClick={this.updateProduct}>Save Changes</button>
    }
    return (
      <div className="wrapper">
        <div className="form-wrap">
          <div className="preview" style={{backgroundImage:`url(${this.state.preview})`}}>
          </div>
          <label htmlFor="imgurl">Image URL:</label>
          <input 
            type="text" 
            id="imgurl"
            name="imgurl"
            value={this.state.imgurl}
            onChange={this.handleInput}
            placeholder="imgurl"
            onBlur={this.updatePreview}/>
          <label htmlFor="name">Product Name:</label>
          <input 
            type="text" 
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
            placeholder="name"/>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={this.state.price}
            onChange={this.handleInput}
            placeholder="price"/>
          <div className="button-wrap">
            {formButton}
            <button onClick={this.clearInput}>Cancel</button>
          </div>          
        </div>
      </div>
    );
  }
}

export default Form;