const LogoIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.903 11.532a.695.695 0 01-.947.267 8.299 8.299 0 00-3.237-1.02 8.318 8.318 0 00-3.384.351.696.696 0 01-.423-1.326 9.668 9.668 0 013.948-.409 9.703 9.703 0 013.777 1.19.697.697 0 01.266.947zm.958-2.429a.695.695 0 01-.938.295 10.87 10.87 0 00-3.944-1.177 10.828 10.828 0 00-4.127.367.695.695 0 11-.386-1.336 12.264 12.264 0 014.653-.415c1.566.159 3.062.606 4.447 1.327.34.178.473.598.295.939zm.346-2.022a.69.69 0 01-.31-.073 13.454 13.454 0 00-4.659-1.345 13.423 13.423 0 00-4.843.383.695.695 0 11-.359-1.344 14.85 14.85 0 015.343-.423c1.802.183 3.532.682 5.139 1.484a.695.695 0 01-.311 1.318z"
				fill="currentColor"/>
		</svg>
	)
}


const PlusIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path d="M 15.25 8 a 0.75 0.75 0 0 1 -0.75 0.75 H 8.75 v 5.75 a 0.75 0.75 0 0 1 -1.5 0 V 8.75 H 1.5 a 0.75 0.75 0 0 1 0 -1.5 h 5.75 V 1.5 a 0.75 0.75 0 0 1 1.5 0 v 5.75 h 5.75 a 0.75 0.75 0 0 1 0.75 0.75 Z" fill="currentColor"/>
			<path fill="none" d="M0 0h16v16H0z"/>
		</svg>
	)
}

const HeartIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor"
			      d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"/>
		</svg>
	)
}

const HeartFilledIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="none" d="M0 0h16v16H0z"/>
			<path fill="currentColor"
			      d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"/>
		</svg>
	)
}

const DownloadIcon = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor"
			      d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"/>
		</svg>
	)
}

const DownDirIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M3 6l5 5.794L13 6z"/>
		</svg>
	)
}

const ExternalIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"/>
		</svg>
	)
}

const PrevIcon = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<polyline stroke="currentColor" points="16 4 7 12 16 20" fill="none"/>
		</svg>
	)
}

const NextIcon = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<polyline stroke="currentColor" points="8 4 17 12 8 20" fill="none"/>
		</svg>
	)
}

const PlayIconBlack = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="black"/>
		</svg>
	)
}
const PlayIcon = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="black"/>
		</svg>
	)
}

const ArrowLeftIcon = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<polygon points="15.54,21.151 5.095,12.229 15.54,3.309 16.19,4.069 6.635,12.229 16.19,20.39 "
			         fill="currentColor"/>
		</svg>
	)
}

const PauseIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="none" d="M0 0h16v16H0z"/>
			<path d="M3 2h3v12H3zm7 0h3v12h-3z" fill="black"/>
		</svg>
	)
}

const PlayerPrevIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z" fill="currentColor"/>
		</svg>
	)
}

const PlayerNextIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z" fill="currentColor"/>
		</svg>
	)
}

const ShuffleIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"
				fill="currentColor"/>
		</svg>
	)
}

const RepeatIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z"
				fill="currentColor"/>
		</svg>
	)
}

const QueueIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path d="M2 2v5l4.33-2.5L2 2zm0 12h14v-1H2v1zm0-4h14V9H2v1zm7-5v1h7V5H9z" fill="currentColor"/>
		</svg>
	)
}

const DeviceIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0 3v8c0 .55.45 1 1 1h5v-1H1V3h5V2H1c-.55 0-1 .45-1 1zm3 11.5c0 .275.225.5.5.5H6v-1H3.5c-.275 0-.5.225-.5.5zM15 2H9c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H9V3h6v11zm-3-8a.75.75 0 100-1.5.75.75 0 000 1.5zm0 6a2 2 0 100-4 2 2 0 000 4zm0-3c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1z"
				fill="currentColor"/>
		</svg>
	)
}

const FullScreenIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6.064 10.229l-2.418 2.418L2 11v4h4l-1.647-1.646 2.418-2.418-.707-.707zM11 2l1.647 1.647-2.418 2.418.707.707 2.418-2.418L15 6V2h-4z"
				fill="currentColor"/>
		</svg>
	)
}

const FullScreenOffIcon = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M22.125 2.582l-.707-.707-4.273 4.273L15 4.001v5h5l-2.146-2.146 4.271-4.273zM6.147 17.146l-4.273 4.272.707.707 4.273-4.272L9 19.999v-5H4l2.147 2.147z"
				fill="currentColor"/>
		</svg>
	)
}

const PictureInPictureIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<g fill="currentColor" fillRule="evenodd">
				<path d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
				      fillRule="nonzero"/>
				<path d="M10 8h4v3h-4z"/>
			</g>
		</svg>
	)
}

const VolumeMutedIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732zm8.623 2.121l-.707-.707-2.147 2.147-2.146-2.147-.707.707L12.062 8l-2.146 2.146.707.707 2.146-2.147 2.147 2.147.707-.707L13.477 8l2.146-2.147z"
				fill="currentColor"/>
		</svg>
	)
}

const VolumeLowIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M10.04 5.984l.658-.77q.548.548.858 1.278.31.73.31 1.54 0 .54-.144 1.055-.143.516-.4.957-.259.44-.624.805l-.658-.77q.825-.865.825-2.047 0-1.183-.825-2.048zM0 11.032v-6h2.802l5.198-3v12l-5.198-3H0zm7 1.27v-8.54l-3.929 2.27H1v4h2.071L7 12.302z"
				fill="currentColor"/>
		</svg>
	)
}

const VolumeNormalIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0 11.032v-6h2.802l5.198-3v12l-5.198-3H0zm7 1.27v-8.54l-3.929 2.27H1v4h2.071L7 12.302zm4.464-2.314q.401-.925.401-1.956 0-1.032-.4-1.957-.402-.924-1.124-1.623L11 3.69q.873.834 1.369 1.957.496 1.123.496 2.385 0 1.262-.496 2.385-.496 1.123-1.369 1.956l-.659-.762q.722-.698 1.123-1.623z"
				fill="currentColor"/>
		</svg>
	)
}

const VolumeFullIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"
				fill="currentColor"/>
		</svg>
	)
}

const LyricsIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.5 1A4.505 4.505 0 004 5.5c0 .731.191 1.411.502 2.022L1.99 13.163a1.307 1.307 0 00.541 1.666l.605.349a1.307 1.307 0 001.649-.283L9.009 9.95C11.248 9.692 13 7.807 13 5.5 13 3.019 10.981 1 8.5 1zM4.023 14.245a.307.307 0 01-.388.066l-.605-.349a.309.309 0 01-.128-.393l2.26-5.078A4.476 4.476 0 007.715 9.92l-3.692 4.325zM8.5 9C6.57 9 5 7.43 5 5.5S6.57 2 8.5 2 12 3.57 12 5.5 10.429 9 8.5 9z"
				fill="currentColor"/>
		</svg>
	)
}

const ArrowRightIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"
				fill="currentColor"/>
		</svg>
	)
}
const pinIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.822.797a2.72 2.72 0 0 1 3.847 0l2.534 2.533a2.72 2.72 0 0 1 0 3.848l-3.678 3.678-1.337 4.988-4.486-4.486L1.28 15.78a.75.75 0 0 1-1.06-1.06l4.422-4.422L.156 5.812l4.987-1.337L8.822.797z"
				fill="currentColor"/>
		</svg>
	)
}
const instaIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M 8 1.44 c 2.136 0 2.389 0.009 3.233 0.047 c 0.78 0.036 1.203 0.166 1.485 0.276 c 0.348 0.128 0.663 0.332 0.921 0.598 c 0.266 0.258 0.47 0.573 0.599 0.921 c 0.11 0.282 0.24 0.706 0.275 1.485 c 0.039 0.844 0.047 1.097 0.047 3.233 s -0.008 2.389 -0.047 3.232 c -0.035 0.78 -0.166 1.204 -0.275 1.486 a 2.654 2.654 0 0 1 -1.518 1.518 c -0.282 0.11 -0.706 0.24 -1.486 0.275 c -0.843 0.039 -1.097 0.047 -3.233 0.047 s -2.39 -0.008 -3.232 -0.047 c -0.78 -0.035 -1.204 -0.165 -1.486 -0.275 a 2.477 2.477 0 0 1 -0.921 -0.599 a 2.477 2.477 0 0 1 -0.599 -0.92 c -0.11 -0.282 -0.24 -0.706 -0.275 -1.486 c -0.038 -0.844 -0.047 -1.096 -0.047 -3.232 s 0.009 -2.39 0.047 -3.233 c 0.036 -0.78 0.166 -1.203 0.275 -1.485 c 0.129 -0.348 0.333 -0.663 0.599 -0.921 a 2.49 2.49 0 0 1 0.92 -0.599 c 0.283 -0.11 0.707 -0.24 1.487 -0.275 c 0.843 -0.038 1.096 -0.047 3.232 -0.047 L 8 1.441 Z m 0.001 -1.442 c -2.172 0 -2.445 0.01 -3.298 0.048 c -0.854 0.04 -1.435 0.176 -1.943 0.373 a 3.928 3.928 0 0 0 -1.417 0.923 c -0.407 0.4 -0.722 0.883 -0.923 1.417 c -0.198 0.508 -0.333 1.09 -0.372 1.942 C 0.01 5.552 0 5.826 0 8 c 0 2.172 0.01 2.445 0.048 3.298 c 0.04 0.853 0.174 1.433 0.372 1.941 c 0.2 0.534 0.516 1.017 0.923 1.417 c 0.4 0.407 0.883 0.722 1.417 0.923 c 0.508 0.198 1.09 0.333 1.942 0.372 c 0.852 0.039 1.126 0.048 3.299 0.048 c 2.172 0 2.445 -0.01 3.298 -0.048 c 0.853 -0.04 1.433 -0.174 1.94 -0.372 a 4.087 4.087 0 0 0 2.34 -2.34 c 0.199 -0.508 0.334 -1.09 0.373 -1.942 c 0.039 -0.851 0.048 -1.125 0.048 -3.298 s -0.01 -2.445 -0.048 -3.298 c -0.04 -0.853 -0.174 -1.433 -0.372 -1.94 a 3.924 3.924 0 0 0 -0.923 -1.418 A 3.928 3.928 0 0 0 13.24 0.42 c -0.508 -0.197 -1.09 -0.333 -1.942 -0.371 c -0.851 -0.041 -1.125 -0.05 -3.298 -0.05 l 0.001 -0.001 Z"
				fill="currentColor"/>
		</svg>
	)
}
const twIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M 13.54 3.889 a 2.968 2.968 0 0 0 1.333 -1.683 a 5.937 5.937 0 0 1 -1.929 0.738 a 2.992 2.992 0 0 0 -0.996 -0.706 a 2.98 2.98 0 0 0 -1.218 -0.254 a 2.92 2.92 0 0 0 -2.143 0.889 a 2.929 2.929 0 0 0 -0.889 2.15 c 0 0.212 0.027 0.442 0.08 0.691 a 8.475 8.475 0 0 1 -3.484 -0.932 A 8.536 8.536 0 0 1 1.532 2.54 a 2.993 2.993 0 0 0 -0.413 1.523 c 0 0.519 0.12 1 0.361 1.445 c 0.24 0.445 0.57 0.805 0.988 1.08 a 2.873 2.873 0 0 1 -1.373 -0.374 v 0.04 c 0 0.725 0.23 1.365 0.69 1.92 a 2.97 2.97 0 0 0 1.739 1.048 a 2.937 2.937 0 0 1 -1.365 0.056 a 2.94 2.94 0 0 0 1.063 1.5 a 2.945 2.945 0 0 0 1.77 0.603 a 5.944 5.944 0 0 1 -3.77 1.302 c -0.243 0 -0.484 -0.016 -0.722 -0.048 A 8.414 8.414 0 0 0 5.15 14 c 0.905 0 1.763 -0.12 2.572 -0.361 c 0.81 -0.24 1.526 -0.57 2.147 -0.988 a 9.044 9.044 0 0 0 1.683 -1.46 c 0.5 -0.556 0.911 -1.155 1.234 -1.798 a 9.532 9.532 0 0 0 0.738 -1.988 a 8.417 8.417 0 0 0 0.246 -2.429 a 6.177 6.177 0 0 0 1.508 -1.563 c -0.56 0.249 -1.14 0.407 -1.738 0.476 Z"
				fill="currentColor"/>
		</svg>
	)
}
const faceIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M16 8a8 8 0 10-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8.002 8.002 0 0016 8z"
				fill="currentColor"/>
		</svg>
	)
}
const instaIconIn = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8 3.892a4.108 4.108 0 100 8.216 4.108 4.108 0 000-8.216zm0 6.775a2.668 2.668 0 110-5.335 2.668 2.668 0 010 5.335zm4.27-5.978a.96.96 0 100-1.92.96.96 0 000 1.92z"
				fill="currentColor"/>
		</svg>
	)
}

const Icon = ({name, size = 24}) => {

	const icons = {
		plus: PlusIcon,
		heart: HeartIcon,
		heartFilled: HeartFilledIcon,
		download: DownloadIcon,
		prev: PrevIcon,
		next: NextIcon,
		downDir: DownDirIcon,
		external: ExternalIcon,
		PlayBlack: PlayIconBlack,
		play: PlayIcon,
		pause: PauseIcon,
		playerPrev: PlayerPrevIcon,
		playerNext: PlayerNextIcon,
		repeat: RepeatIcon,
		shuffle: ShuffleIcon,
		queue: QueueIcon,
		fullScreen: FullScreenIcon,
		fullScreenOff: FullScreenOffIcon,
		pictureInPicture: PictureInPictureIcon,
		device: DeviceIcon,
		volumeMuted: VolumeMutedIcon,
		volumeLow: VolumeLowIcon,
		volumeNormal: VolumeNormalIcon,
		volumeFull: VolumeFullIcon,
		lyrics: LyricsIcon,
		arrowLeft: ArrowLeftIcon,
		arrowRight: ArrowRightIcon,
		logo: LogoIcon,
		pin : pinIcon,
		instagram : instaIcon,
		instagramIn : instaIconIn,
		twitter : twIcon,
		facebook : faceIcon
	}

	const Component = icons[name]
	return <Component size={size}/>

}

export {
	Icon
}