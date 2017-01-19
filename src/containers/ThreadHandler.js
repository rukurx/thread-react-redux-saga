import { connect } from 'react-redux';
import Thread from '../components/Thread';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => ({
    thread: state.thread
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return { actions: bindActionCreators(actionCreators, dispatch) };
};

const ThreadHandler = connect(
    mapStateToProps,
    mapDispatchToProps
)(Thread);

export default ThreadHandler;
