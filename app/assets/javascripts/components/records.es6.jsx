class Records extends React.Component {

  constructor(props) {
    super(props);
    this.state = {records: props.data};

    this.addRecord = this.addRecord.bind(this);
  }

  addRecord(record) {
    newRecords = this.state.records.concat(record);
    this.setState({records: newRecords});
  }

  render () {
    const rows = this.state.records.map((object) =>
      <Record key={object.id} record={object} />
    );

    return (
      <div className='records'>
        <h2 className='title'>Records</h2>
        <RecordForm  handleNewRecord={this.addRecord}/>
        <hr></hr>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

Records.propTypes = {
  records: React.PropTypes.array
};
