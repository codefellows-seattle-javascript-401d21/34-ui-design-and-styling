import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expenses
      ? this.props.expenses
      : {
        spend: '',
        cost: '',
        categoryId: this.props.categoryId,
        editing: false,
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({
      spend: '',
      cost: '',

    });
  }

  render() {
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <h2>Expenses</h2>
        <input
          type="text"
          name="spend"
          placeholder="Expense Name"
          value={this.state.spend}
          onChange={this.handleChange}/>

        <input
          type="text"
          name="cost"
          placeholder="Expense Amount"
          value={this.state.cost}
          onChange={this.handleChange}/>
        <button type="submit">{this.props.buttonText}</button>
      </form>

    );
  }
}

export default ExpenseForm;
