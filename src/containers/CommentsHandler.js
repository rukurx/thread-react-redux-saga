import { connect } from 'react-redux';
import Comments from '../components/Comments';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => ({
    comments: state.comments
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return { actions: bindActionCreators(actionCreators, dispatch) };
};

const CommentsHandler = connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);

export default CommentsHandler;
