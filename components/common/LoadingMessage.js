export default ({ message }) => (
    <aside className="text-center loadingsection">
    	<img src="/static/loading.gif" width="40px"/>
     	<p> {message}</p>
      <style jsx>{`
        aside {
          padding: 1.5em;
          font-size: 14px;
        }
      `}</style>
    </aside>
  )