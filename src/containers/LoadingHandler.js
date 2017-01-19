import { connect } from 'react-redux';
import Loading from '../components/Loading';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => ({
    loading: state.loading
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return { actions: bindActionCreators(actionCreators, dispatch) };
};

const LoadingHandler = connect(
    mapStateToProps,
    mapDispatchToProps
)(Loading);

export default LoadingHandler;
