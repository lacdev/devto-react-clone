import ContentLoader from 'react-content-loader'

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={500}
    height={520}
    viewBox="0 0 640 520"
    backgroundColor="#d1d1d1"
    foregroundColor="#daadff"
    {...props}
  >
    <rect x="113" y="267" rx="10" ry="10" width="200" height="8" />
    <rect x="113" y="284" rx="10" ry="10" width="61" height="7" />
    <circle cx="75" cy="281" r="23" />
    <rect x="17" y="5" rx="31" ry="31" width="567" height="236" />
    <rect x="110" y="326" rx="10" ry="10" width="451" height="19" />
    <rect x="114" y="391" rx="10" ry="10" width="48" height="14" />
    <rect x="110" y="424" rx="10" ry="10" width="135" height="24" />
    <rect x="265" y="424" rx="10" ry="10" width="135" height="24" />
    <rect x="111" y="358" rx="10" ry="10" width="392" height="19" />
    <rect x="178" y="391" rx="10" ry="10" width="45" height="13" />
    <rect x="239" y="391" rx="10" ry="10" width="45" height="13" />
    <rect x="296" y="391" rx="10" ry="10" width="45" height="13" />
  </ContentLoader>
)

export { Loader }
