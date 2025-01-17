const show_timeline = async (context, commands) => {
  const el = document.createElement('quake-calendar-timeline');
  let todo_req = await fetch(`/entry/todo`);
  let todos = await todo_req.json();

  let blog_req = await fetch(`/entry/blog`);
  let blogs = await blog_req.json();

  let data = from_todo_blog_to_quake_calendar(todos.hits, blogs.hits);

  el.setAttribute('entries', JSON.stringify({
    items: ['blog', 'todo']
  }));
  el.setAttribute('data', JSON.stringify(data));

  return el;
}

