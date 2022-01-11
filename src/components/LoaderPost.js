import ContentLoader from 'react-content-loader'
const LoaderPost=(props) => {
    return (
        <ContentLoader 
        speed={2}
        width={803}
        height={520}
        viewBox="0 0 803 520"
        backgroundColor="#f3f3f3"
        foregroundColor="#3b49df"
        {...props}
      >
        <circle cx="49" cy="302" r="15" /> 
        <rect x="76" y="289" rx="2" ry="2" width="140" height="10" /> 
        <rect x="76" y="305" rx="2" ry="2" width="140" height="10" /> 
        <rect x="4" y="-4" rx="2" ry="2" width="604" height="280" /> 
        <rect x="25" y="336" rx="0" ry="0" width="569" height="15" /> 
        <rect x="499" y="444" rx="0" ry="0" width="97" height="32" /> 
        <rect x="25" y="360" rx="0" ry="0" width="569" height="15" /> 
        <rect x="25" y="385" rx="0" ry="0" width="569" height="15" /> 
        <rect x="25" y="410" rx="0" ry="0" width="569" height="15" /> 
        <rect x="368" y="445" rx="0" ry="0" width="97" height="32" />
      </ContentLoader>
    )
}

export {LoaderPost}