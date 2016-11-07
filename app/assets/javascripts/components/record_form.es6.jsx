class RecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      amount: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.valid = this.valid.bind(this);
  }

  handleChange(e) {
    name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
      $.post('', {record: this.state}, (data) => {
        this.props.handleNewRecord(data);
        this.setState(this.state);
    });
  }

  valid() {
    return this.state.title && this.state.date && this.state.amount;
  }

  render () {

    return (
      <div>
        <form className='form-inline' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Date'
              name='date'
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Title'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              placeholder='Amount'
              name='amount'
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </div>
          <button
            type='submit'
            className='btn btn-primary'
            disabled={!this.valid()}>
            Create record
          </button>
        </form>
      </div>
    );
  }
}

RecordForm.propTypes = {
  title: React.PropTypes.string,
  data: React.PropTypes.any,
  amount: React.PropTypes.number
};
