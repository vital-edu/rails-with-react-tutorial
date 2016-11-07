class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {record: props.record};

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: ["/records/" + this.state.record.id],
      dataType: 'JSON',
      success: this.props.handleDeleteRecord(this.props.record)
    });
  }

  render() {
    return(
      <tr>
        <td> {this.state.record.date} </td>
        <td> {this.state.record.title} </td>
        <td> {amountFormat(this.state.record.amount)} </td>
        <td>
          <a className='btn btn-danger' onClick={this.handleDelete}>
            Delete
          </a>
        </td>
      </tr>
    );
  }
}

Record.propTypes = {
  record: React.PropTypes.object
};
