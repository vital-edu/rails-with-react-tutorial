class AmountBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      text: props.text,
      type: props.type
    }
  }

  render () {
    const panelClass = 'panel panel-' + [this.props.type];

    return (
      <div className='col-md-4'>
        <div className={panelClass}>
          <div className='panel-heading'>
            {this.props.text}
          </div>
          <div className='panel-body'>
            {amountFormat(this.props.amount)}
          </div>
      </div>
      </div>
    );
  }
}

AmountBox.propTypes = {
  amount: React.PropTypes.number,
  text: React.PropTypes.string,
  type: React.PropTypes.string
};
