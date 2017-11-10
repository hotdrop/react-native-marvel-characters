// @flow

export type Action = {
    type: string,
    characters?: Array<Character>
} | {
    type: string,
    comics?: Array<Comics>
}

export type CharactersResponse = {
    data: {
        // ここから下がMarvel APIのCharactersのJSON構造
        data: {
            offset: number,
            limit: number,
            total: number,
            count: number,
            results: Array<Character>
        }
    }
}

export type Character = {
    id: number,
    name: string,
    thumbnail: {
        path: string,
        extension: string
    },
    description: string,
    comics: {
        available: number,
        items: Array<ItemComic>,
    },
    series: {
        available: number,
        items: Array<ItemSeries>
    },
    stories: {
        available: number,
        items: Array<ItemStory>
    },
    events: {
        available: number,
        items: Array<ItemEvent>
    },
    urls: Array<Url>
}
type ItemComic = { resourceURI: string, name: string } 
type ItemSeries = { resourceURI: string, name: string }
type ItemStory = { resourceURI: string, name: string }
type ItemEvent = { resourceURI: string, name: string }
type Url = { type: string, url: string}

export type Comics = {
    name: string
}

// React Native Navigatorは仕方ないから自分で定義する
export type RNNavigator = {
    dismissModal: () => void,
    pop: () => void,
    popToRoot: () => void,
    push: (Object) => void,
    setButtons: (Object) => void,
    setOnNavigatorEvent: (Object) => void,
    setTitle: (Object) => void,
    showModal: (Object) => void,
    switchToTab: ({
      tabIndex: number,
    }) => void
}
export type RNNavigatorEvent = {
    type: string,
    id: string,
    [string]: string,
}