export const constructUrl = (exercise) => {
  let {
    server,
    path,
    submission_url,
    post_url,
    max_points,
    uid,
    ordinal_number
  } = { ...exercise };
  let url = server + path;
  return  `${url}?submission_url=${submission_url}&post_url=${post_url}&max_points=${max_points}&uid=${uid}&ordinal_number=${ordinal_number}`;
}