class Records extends React.Component {

  constructor(props) {
    super(props);
    this.state = {records: props.data};

    this.addRecord = this.addRecord.bind(this);
    this.credits = this.credits.bind(this);
  }

  addRecord(record) {
    newRecords = this.state.records.concat(record);
    this.setState({records: newRecords});
  }

  credits() {
    credits = this.state.records.filter((val) => (
      val.amount >= 0
    ));
    return credits.reduce((prev, curr) => (
      prev + parseFloat(curr.amount)
    ), 0);
  }

  debits() {
    debits = this.state.records.filter((val) => (
      val.amount < 0
    ));
    return debits.reduce((prev, curr) => (
      prev + parseFloat(curr.amount)
    ), 0);
  }

  balance() {
    return this.debits() + this.credits();
  }

  render () {
    const rows = this.state.records.map((object) =>
      <Record key={object.id} record={object} />
    );

    return (
      <div className='records'>
        <h2 className='title'>Records</h2>
        <div className='row'>
          <AmountBox type='success' amount={this.credits()} text='Credit'/>
          <AmountBox type='danger' amount={this.debits()} text='Debit'/>
          <AmountBox type='info' amount={this.balance()} text='Balance'/>
          {console.log(this.credits())}
        </div>
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
