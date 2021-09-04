import { AppState, PostInfo, ColumnProps } from "@/types/interface";

export default {
  login(state: AppState) {
    state.user = { ...state, isLogin: true, name: "Kisstar" };
  },
  setColumns(state: AppState, newColumnList: ColumnProps[]) {
    state.columnList = newColumnList;
  },
  setPosts(state: AppState, newPostList: PostInfo[]) {
    state.postList = newPostList;
  },
  createPost(state: AppState, newPost: PostInfo) {
    state.postList.push(newPost);
  }
};
