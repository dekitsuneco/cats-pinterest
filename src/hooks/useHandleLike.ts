import { CatModel } from '../models/Cat';
import { useAppSelector, useAppDispatch } from '../store/hooks/redux';
import { likedSlice } from '../store/reducers/LikedSlice';

const useHandleLike = () => {
  const { liked } = useAppSelector((state) => state.likedReducer);
  const { addToLiked, removeFromLiked } = likedSlice.actions;
  const dispatch = useAppDispatch();

  const handleLike = ({ id, url }: CatModel) => {
    const isLiked = () => {
      return liked.map((likedCat) => likedCat.id).includes(id);
    };

    const ActionToDspacth = isLiked() ? removeFromLiked : addToLiked;

    dispatch(ActionToDspacth({ id, url }));
  };

  return handleLike;
};

export { useHandleLike };
