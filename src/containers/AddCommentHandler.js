import { connect } from 'react-redux';
import AddComment from '../components/AddComment';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => ({
    comments: state.comments
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return { actions: bindActionCreators(actionCreators, dispatch) };
};

const AddCommentHandler = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddComment);

export default AddCommentHandler;
