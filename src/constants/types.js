// @flow

export type CharacterAction = {
    type: string,
    characters?: Array<Character>
};
export type ComicAction = {
    type: string,
    comics?: Array<Comic>
};
export type State = {
    characters: Array<Character>,
    comics: Array<Comic>    
};

export type CharactersResponse = {
    data: {
        data: {
            offset: number,
            limit: number,
            total: number,
            count: number,
            results: Array<Character>
        }
    }
};

export type ComicsResponse = {
    data: {
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
};
type ItemComic = { resourceURI: string, name: string };
type ItemSeries = { resourceURI: string, name: string };
type ItemStory = { resourceURI: string, name: string };
type ItemEvent = { resourceURI: string, name: string };
type Url = { type: string, url: string}

export type Comic = {
    id: number,
    title: string,
    description: string,
    format: string,
    pageCount: number,
    prices: Array<Price>,
    thumbnail: {
        path: string,
        extension: string
    },
    images: Array<Image>,
    creators: {
        available: number,
        items: Array<Creator>
    },
    characters: {
        available: number,
        items: Array<ItemCharacter>
    }
};
type Creator = { resourceURI: string, name: string, role: string };
type Price = { type: string, price: number };
type Image = { path: string, extension: string };
type ItemCharacter = { resourceURI: string, name: string };

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
};
export type RNNavigatorEvent = {
    type: string,
    id: string,
    [string]: string,
};