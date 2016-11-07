class Records extends React.Component {

  constructor(props) {
    super(props);
    this.state = {records: props.data};
  }

  render () {
    const rows = this.state.records.map((object) =>
      <Record key={object.id} record={object} />
    );

    return (
      <div>
        <div>
          <h2 className='title'>Records</h2>
        </div>
        <table className='table table-bordered'>
          <thread>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thread>
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
