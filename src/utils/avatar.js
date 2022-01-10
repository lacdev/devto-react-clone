const avatar = [
    "https://avatars.githubusercontent.com/u/30902201?v=4",
    "https://avatars.githubusercontent.com/u/55599878?v=4",
    "https://avatars.githubusercontent.com/u/8777948?v=4",
    "https://avatars.githubusercontent.com/u/16639331?v=4",
    "https://avatars.githubusercontent.com/u/32988878?v=4",
    "https://avatars.githubusercontent.com/u/51751663?v=4",
    "https://avatars.githubusercontent.com/u/42062622?v=4",
    "https://avatars.githubusercontent.com/u/16058869?v=4",
    "https://avatars.githubusercontent.com/u/2801187?v=4",
    "https://avatars.githubusercontent.com/u/44302373?v=4",
    "https://avatars.githubusercontent.com/u/59584014?v=4",
    "https://avatars.githubusercontent.com/u/170270?v=4",
    "https://avatars.githubusercontent.com/u/725337?v=4",
    "https://avatars.githubusercontent.com/u/1823966?v=4",
    "https://avatars.githubusercontent.com/u/26834658?v=4",   
]

const getRandomAvatar = () => Math.floor(Math.random() * avatar.length)

export { getRandomAvatar }