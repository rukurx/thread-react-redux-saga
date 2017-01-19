import { connect } from 'react-redux';
import Likes from '../components/Likes';

const mapStateToProps = (state) => ({
    likes: state.likes
});

const LikesHandler = connect(
    mapStateToProps,
)(Likes);

export default LikesHandler;
