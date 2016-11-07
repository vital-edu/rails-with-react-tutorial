class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {record: props.record}
  }

  render() {
    return(
      <tr>
        <td> {this.state.record.date} </td>
        <td> {this.state.record.title} </td>
        <td> {this.state.record.amount} </td>
      </tr>
    );
  }
}

Record.propTypes = {
  record: React.PropTypes.object
};
