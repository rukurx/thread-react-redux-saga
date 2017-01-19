import { connect } from 'react-redux';
import GetMoreLikesBtn from '../components/GetMoreLikesBtn';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => ({
    likes: state.likes
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return { actions: bindActionCreators(actionCreators, dispatch) };
};

const GetMoreLikesBtnHandler = connect(
    mapStateToProps,
    mapDispatchToProps
)(GetMoreLikesBtn);

export default GetMoreLikesBtnHandler;
