export = phina
export as namespace phina

declare namespace phina {
    
    interface CreateClassParams {
        superClass?: Function
        init?: Function
        update?: Function
        _static?: {
            [key: string]: any
            [key: number]: any
        }
        _defined?: (_class: Function) => void
        _accessor?: {
            [key: string]: {
                get?: Function
                set?: Function
            }
            [key: number]: {
                get?: Function
                set?: Function
            }
        }
        [key: string]: any
        [key: number]: any
    }

    interface DefineParams {
        superClass?: string | Function
        init?: Function
        update?: Function
        _static?: {
            [key: string]: any
            [key: number]: any
        }
        _defined?: (_class: Function) => void
        _accessor?: {
            [key: string]: {
                get?: Function
                set?: Function
            }
            [key: number]: {
                get?: Function
                set?: Function
            }
        }
        [key: string]: any
        [key: number]: any
    }

    var VERSION: string
    function isNode(): boolean
    function namespace(): void
    var global: {}
    function testUA(): boolean
    function isAndroid(): boolean
    function isIPhone(): boolean
    function isIPad(): boolean
    function isIOS(): boolean
    function isMobile(): boolean
    function createClass(params: CreateClassParams): Function
    function using<T>(path: string): T
    function register<T>(path: string, _class: T): T
    function define(path: string, params: DefineParams): Function
    function globalize(): void
    function main(func: Function): void

    namespace geom {

        interface Vector2 {
            x: number
            y: number

            clone(): Vector2
            equals(v: Vector2): boolean
            set(x: number, y: number): this
            sub(v: Vector2): this
            mul(n: number): this
            div(n: number): this
            negate(): this
            dot(v: Vector2): number
            cross(v: Vector2): number
            length(): number
            lengthSquared(): number
            distance(v: Vector2): number
            distanceSquared(v: Vector2): number
            random(min?: number, max?: number, len?: number): this
            normalize(): this
            toString(): string
            getDirection(): string
            toAngle(): number
            fromAngle(rad: number, len?: number): this
            toDegree(): number
            fromDegree(deg: number, len?: number): this
            rotate(rad: number, center?: Vector2): this
        }
        interface Vector2Static {
            new(x: number, y: number): Vector2
            (x: number, y: number): Vector2

            min(a: Vector2, b: Vector2): Vector2
            max(a: Vector2, b: Vector2): Vector2
            add(lhs: Vector2, rhs: Vector2): Vector2
            sub(lhs: Vector2, rhs: Vector2): Vector2
            mul(v: Vector2, n: number): Vector2
            div(v: Vector2, n: number): Vector2
            negate(v: Vector2): Vector2
            dot(lhs: Vector2, rhs: Vector2): Vector2
            cross(lhs: Vector2, rhs: Vector2): Vector2
            distance(lhs: Vector2, rhs: Vector2): number
            distanceSquared(lhs: Vector2, rhs: Vector2): number
            manhattanDistance(lhs: Vector2, rhs: Vector2): number
            normal(a: Vector2, b: Vector2): Vector2
            reflect(v: Vector2, normal: Vector2): Vector2
            wall(v: Vector2, normal: Vector2): Vector2
            lerp(a: Vector2, b: Vector2, t: number): Vector2
            slerp(lhs: any, rhs: any, t: any): any //TODO
            random(min?: number, max?: number, len?: number): Vector2

            ZERO: Vector2
            LEFT: Vector2
            RIGHT: Vector2
            UP: Vector2
            DOWN: Vector2
        }
        var Vector2: Vector2Static

        interface Vector3 {
            x: number
            y: number
            z: number
        }
        interface Vector3Static {
            new(x: number, y: number, z: number): Vector3
            (x: number, y: number, z: number): Vector3
        }
        var Vector3: Vector3Static

        interface Matrix33 {
            m00: number
            m01: number
            m02: number
            m10: number
            m11: number
            m12: number
            m20: number
            m21: number
            m22: number

            set(
                m00: number, m01: number, m02: number,
                m10: number, m11: number, m12: number,
                m20: number, m21: number, m22: number): this
            identity(): this
            clone(): Matrix33
            determinant(): number
            transpose(): this
            invert(): this
            multiply(mat: Matrix33): this
            multiplyVector2(v: Vector2): Vector2
            getRow(row: number): [number, number, number]
            getCol(col: number): [number, number, number]
            toString(): string
        }
        interface Matrix33Static {
            new(
                m00: number, m01: number, m02: number,
                m10: number, m11: number, m12: number,
                m20: number, m21: number, m22: number): Matrix33
            (
                m00: number, m01: number, m02: number,
                m10: number, m11: number, m12: number,
                m20: number, m21: number, m22: number): Matrix33

            IDENTITY: Matrix33
        }
        var Matrix33: Matrix33Static

        interface Rect {
            x: number
            y: number
            width: number
            height: number

            //accessors
            left: number
            top: number
            right: number
            bottom: number
            readonly centerX: number
            readonly centerY: number

            set(x: number, y: number, width: number, height: number): this
            moveTo(x: number, y: number): this
            moveBy(x: number, y: number): this
            setSize(w: number, h: number): this
            padding(top: number, right?: number, bottom?: number, left?: number): this
            contains(x: number, y: number): boolean
            clone(): Rect
            toCircle(): Circle
            toArray(): [number, number, number, number]
        }
        interface RectStatic {
            new(x: number, y: number, width: number, height: number): Rect
            (x: number, y: number, width: number, height: number): Rect
        }
        var Rect: RectStatic

        interface Circle {
            x: number
            y: number
            radius: number

            //accessors
            readonly left: number
            readonly top: number
            readonly right: number
            readonly bottom: number
            readonly centerX: number
            readonly centerY: number

            set(x: number, y: number, radius: number): this
            moveTo(x: number, y: number): this
            moveBy(x: number, y: number): this
            setSize(w: number, h: number): this
            contains(x: number, y: number): boolean
            clone(): Rect
            toRect(): Rect
            toArray(): [number, number, number]
        }
        interface CircleStatic {
            new(x: number, y: number, radius: number): Circle
            (x: number, y: number, radius: number): Circle
        }
        var Circle: CircleStatic

        interface CollisionStatic {
            testCircleCircle(circle0: Circle, circle1: Circle): boolean
            testRectRect(rect0: Rect, rect1: Rect): boolean
            testCircleRect(circle: Circle, rect: Rect): boolean
            testCircleLine(circle: Circle, p1: Vector2, p2: Vector2): boolean
            testLineLine(p1: Vector2, p2: Vector2, p3: Vector2, p4: Vector2): boolean
            testRectLine(rect: Rect, p1: Vector2, p2: Vector2): boolean
        }
        var Collision: CollisionStatic

    }

    namespace util {

        interface EventDispatcher {
            on(type: string, listener: Function): this
            off(type: string, listener: Function): this
            fire(e: { type: string }): this
            flare(type: string, param: {}): this
            one(type: string, listener: Function): this
            has(type: string): boolean
            clear(type: string): this
            addEventListener(type: string, listener: Function): this
            removeEventListener(type: string, listener: Function): this
            clearEventListener(type: string): this
            hasEventListener(type: string): boolean
            dispatchEvent(e: { type: string }): this
            dispatchEventByType(type: string, param: {}): this
        }
        interface EventDispatcherStatic {
            new(): EventDispatcher
            (): EventDispatcher
        }
        var EventDispatcher: EventDispatcherStatic

        type EasingType = keyof phina.util.TweenStatic['EASING']
        interface Tween extends EventDispatcher {
            //accessors
            easing: string

            fromTo(target: {}, biginProps: {}, finishProps: {}, duration: number, easing: EasingType): this
            to(target: {}, finishProps: {}, duration: number, easing: EasingType): this
            from(target: {}, biginProps: {}, duration: number, easing: EasingType): this
            by(target: {}, props: {}, duration: {}, easing: EasingType): this
            yoyo(): this
            gain(time: number): this
            forward(time: number): this
            backward(time: number): this
            seek(time: number): this
        }
        interface TweenStatic {
            new(target: {}): Tween
            (target: {}): Tween

            EASING: {
                default(t: number, b: number, c: number, d: number): number
                liner(t: number, b: number, c: number, d: number): number
                swing(t: number, b: number, c: number, d: number): number
                easeInQuad(t: number, b: number, c: number, d: number): number
                easeOutQuad(t: number, b: number, c: number, d: number): number
                easeInOutQuad(t: number, b: number, c: number, d: number): number
                easeInCubic(t: number, b: number, c: number, d: number): number
                easeOutCubic(t: number, b: number, c: number, d: number): number
                easeInOutCubic(t: number, b: number, c: number, d: number): number
                easeOutInCubic(t: number, b: number, c: number, d: number): number
                easeInQuart(t: number, b: number, c: number, d: number): number
                easeOutQuart(t: number, b: number, c: number, d: number): number
                easeInOutQuart(t: number, b: number, c: number, d: number): number
                easeOutInQuart(t: number, b: number, c: number, d: number): number
                easeInQuint(t: number, b: number, c: number, d: number): number
                easeOutQuint(t: number, b: number, c: number, d: number): number
                easeInOutQuint(t: number, b: number, c: number, d: number): number
                easeOutInQuint(t: number, b: number, c: number, d: number): number
                easeInSine(t: number, b: number, c: number, d: number): number
                easeOutSine(t: number, b: number, c: number, d: number): number
                easeInOutSine(t: number, b: number, c: number, d: number): number
                easeOutInSine(t: number, b: number, c: number, d: number): number
                easeInExpo(t: number, b: number, c: number, d: number): number
                easeOutExpo(t: number, b: number, c: number, d: number): number
                easeInOutExpo(t: number, b: number, c: number, d: number): number
                easeOutInExpo(t: number, b: number, c: number, d: number): number
                easeInCirc(t: number, b: number, c: number, d: number): number
                easeOutCirc(t: number, b: number, c: number, d: number): number
                easeInOutCirc(t: number, b: number, c: number, d: number): number
                easeOutInCirc(t: number, b: number, c: number, d: number): number
                easeInElastic(t: number, b: number, c: number, d: number): number
                easeOutElastic(t: number, b: number, c: number, d: number): number
                easeInOutElastic(t: number, b: number, c: number, d: number): number
                easeOutInElastic(t: number, b: number, c: number, d: number): number
                easeInBack(t: number, b: number, c: number, d: number): number
                easeOutBack(t: number, b: number, c: number, d: number): number
                easeInOutBack(t: number, b: number, c: number, d: number): number
                easeOutInBack(t: number, b: number, c: number, d: number): number
                easeInBounce(t: number, b: number, c: number, d: number): number
                easeOutBounce(t: number, b: number, c: number, d: number): number
                easeInOutBounce(t: number, b: number, c: number, d: number): number
                easeOutInBounce(t: number, b: number, c: number, d: number): number
            }
        }
        var Tween: TweenStatic

        interface Ticker extends EventDispatcher {
            frame: number
            deltaTime: number
            elapsedTime: number

            //accessors
            fps: number

            tick(func: Function): void
            untick(func: Function): void
            run(): number
            start(): this
            resume(): any //TODO
            stop(): any
            rewind(): any //TODO
        }
        interface TickerStatic {
            new(): Ticker
            (): Ticker

            runner(run: Function, delay: number): void
        }
        var Ticker: TickerStatic

        interface GridArguments {
            width?: number
            columns?: number
            loop?: boolean
            offset?: number
        }
        interface Grid {
            width: number
            columns: number
            loop: boolean
            offset: number

            span(index: number): number
            unit(): number
            center(offset?: number): number
        }
        interface GridStatic {
            new(width?: number, columns?: number, loop?: boolean, offset?: number): Grid
            new(props?: GridArguments): Grid
            (width?: number, columns?: number, loop?: boolean, offset?: number): Grid
            (props?: GridArguments): Grid
        }
        var Grid: GridStatic

        interface ChangeDispatcher extends EventDispatcher {
            register(obj: {}): this
            register(key: string, defaultValue: any): this
            observe(): void
            unobserve(): void
        }
        interface ChangeDispatcherStatic {
            new(): ChangeDispatcher
            (): ChangeDispatcher
        }
        var ChangeDispatcher: ChangeDispatcherStatic

        interface Flow<T> extends EventDispatcher {
            resolve(arg: T): void
            reject(): void
            then<U>(func: (arg: T) => U | Flow<U>): Flow<U>
        }
        interface FlowStatic {
            new <T>(
                func: ((
                    resolve: (arg: T) => void,
                    reject: () => void
                ) => void),
                wait?: boolean
            ): Flow<T>
            <T>(
                func: ((
                    resolve: (arg: T) => void,
                    reject: () => void
                ) => void),
                wait?: boolean
            ): Flow<T>

            resolve(): Flow<void>
            resolve<T>(value: T): Flow<T>
            all<T>(flows: Flow<T>[]): Flow<T[]>
        }
        var Flow: FlowStatic

        type ColorType = keyof phina.util.ColorStatic['COLOR_LIST']
        interface Color {
            r: number
            g: number
            b: number
            a: number

            set(r: number, g: number, b: number, a?: number): this
            setFromNumber(r: number, g: number, b: number, a?: number): this
            setFromObject(obj: { r: number, g: number, b: number, a: number }): this
            setFromArray(arr: [number, number, number, number]): this
            setFromString(str: string): this

            setSmart(r: number, g: number, b: number, a?: number): this
            setSmart(arr: [number, number, number, number]): this
            setSmart(obj: { r: number, g: number, b: number, a: number }): this
            setSmart(str: string): this

            toStyleAsHex(): string
            toStyleAsRGB(): string
            toStyleAsRGBA(): string
            toStyle(): string
        }
        interface ColorStatic {
            new(r: number, g: number, b: number, a?: number): Color
            (r: number, g: number, b: number, a?: number): Color

            COLOR_LIST: {
                black: [number, number, number]
                silver: [number, number, number]
                gray: [number, number, number]
                white: [number, number, number]
                maroon: [number, number, number]
                red: [number, number, number]
                purple: [number, number, number]
                fuchsia: [number, number, number]
                green: [number, number, number]
                lime: [number, number, number]
                olive: [number, number, number]
                yellow: [number, number, number]
                navy: [number, number, number]
                blue: [number, number, number]
                teal: [number, number, number]
                aqua: [number, number, number]
            }

            strToNum(str: string): [number, number, number]
            stringToNumber(str: string): [number, number, number]
            HSLtoRGB(h: number, s: number, l: number): [number, number, number]
            HSLtoRGBA(h: number, s: number, l: number): [number, number, number, number]
            HSLAtoRGBA(h: number, s: number, l: number, a: number): [number, number, number, number]
            createStyleRGBA(r: number, g: number, b: number): string
            createStyleRGB(r: number, g: number, b: number, a: number): string
            createStyleHSL(h: number, s: number, l: number): string
            createStyleHSLA(h: number, s: number, l: number, a: number): string
        }
        var Color: ColorStatic

        interface Random {
            //accessors
            seed: number

            random(): number
            randint(min: number, max: number): number
            randfloat(min: number, max: number): number
            randbool(): boolean
            randarray(len: number, min: number, max: number): number[]
        }
        interface RandomStatic {
            new(seed: number): Random
            (seed: number): Random

            MAX: number
            seed: number
            getSeed(): number
            setSeed(): number
            random(): number
            randint(min: number, max: number): number
            randfloat(min: number, max: number): number
            randbool(): boolean
            randarray(len: number, min: number, max: number): number[]
            xor32(seed: number): number
            uuid(): string
        }
        var Random: RandomStatic

        interface QueryStringStatic {
            parse(text?: string, sep?: string, eq?: string, isDecode?: boolean): {}
            stringify(value: {}, sep?: string, eq?: string, isEncode?: boolean): string
        }
        var QueryString: QueryStringStatic

        interface AjaxOptions {
            type?: string
            contentType?: string
            responseType?: string
            data?: any
            url?: string
        }
        interface AjaxStatic {
            defaults: {
                type: string
                contentType: string
                responseType: string
                data: any
                url: string
            }
            request<T>(options?: AjaxOptions): Flow<T>
            get<T>(url: string): Flow<T>
            post<T>(url: string): Flow<T>
            put<T>(url: string): Flow<T>
            del(url: string): Flow<any>
        }
        var Ajax: AjaxStatic

        interface SupportStatic {
            canvas: boolean
            webGL: boolean
            webAudio: boolean
        }
        var Support: SupportStatic

    }

    namespace asset {
        interface Asset extends util.EventDispatcher {
            serverError: boolean
            notFount: boolean
            loadError: boolean

            load(src: string): util.Flow<this>
            isLoaded(): boolean
            //_load(resolve: Function): void
            loadDummy(): any
        }
        interface AssetStatic {
            new(src?: string): Asset
            (src?: string): Asset
        }
        var Asset: AssetStatic

        interface AssetManagerStatic {
            assets: {
                image: { [key: string]: Asset }
                sound: { [key: string]: Asset }
                spritesheet: { [key: string]: Asset }
            }
            get(type: string, key: string): Asset
            set(type: string, key: string, asset: Asset): void
            contains(type: string, key: string): void //TODO?
        }
        var AssetManager: AssetManagerStatic

        interface AssetLoaderParams {
            cache?: boolean
        }
        interface AssetLoaderLoadParams {
            [key: string]: { [key: string]: any }
        }
        type AssetLoaderAssetLoadFunction = (
            key: string,
            path: string
        ) => util.Flow<any>
        interface AssetLoader extends util.EventDispatcher {
            assets: {}

            load(params: AssetLoaderLoadParams): util.Flow<null>
        }
        interface AssetLoaderStatic {
            new(params?: AssetLoaderParams): AssetLoader
            (params?: AssetLoaderParams): AssetLoader

            assetLoadFunctions: { [key: string]: AssetLoaderAssetLoadFunction }
            register(key: string, func: AssetLoaderAssetLoadFunction): this
        }
        var AssetLoader: AssetLoaderStatic

        interface File extends Asset {
            data: {} | null
        }
        interface FileStatic {
            new(): File
            (): File
        }
        var File: FileStatic

        interface Script extends Asset {
            domElement: HTMLScriptElement & null
        }
        interface ScriptStatic {
            new(): Script
            (): Script
        }
        var Script: ScriptStatic

        type TextureFilter = (
            pixel?: [number, number, number, number],
            i?: number,
            x?: number,
            y?: number,
            imageData?: ImageData
        ) => void
        interface Texture extends Asset {
            domElement: HTMLImageElement | null

            clone(): Texture
            transmit(color: util.Color): void
            filter(filters: TextureFilter): this
        }
        interface TextureStatic {
            new(): Texture
            (): Texture
        }
        var Texture: TextureStatic

        interface Sound extends Asset {
            //accessors
            volume: number
            loop: boolean
            loopStart: number
            loopEnd: number
            playbackRate: number

            context: AudioContext
            gainNode: GainNode

            play(when?: number, offset?: number, duration?: number): this
            stop(): this
            pause(): this
            resume(): this
            loadFromBuffer(buffer: AudioBuffer): this
            setLoop(loop: boolean): this
            setLoopStart(loopStart: number): this
            setLoopEnd(loopEnd: number): this
            setPlaybackRate(playbackRate: number): this
            loadDummy(): void
        }
        interface SoundStatic {
            new(): Sound
            (): Sound

            getMasterGain(): GainNode
            getAudioContext(): AudioContext
        }
        var Sound: SoundStatic

        interface SoundManagerStatic {
            volume: number
            musicVolume: number
            muteFlag: boolean
            currentMusic: Sound | null
            play(name: string, when?: number, offset?: number, duration?: number): Sound
            stop(): any //TODO
            pause(): any //TODO
            fade(): any //TODO
            setVolume(volume: number): void
            getVolume(): number
            mute(): this
            unmute(): this
            isMute(): boolean
            playMusic(name: string, fadeTime?: number, loop?: boolean, when?: number, offset?: number, duration?: number): Sound
            stopMusic(fadeTime?: number): void
            pauseMusic(): void
            resumeMusic(): void
            setVolumeMusic(volume: number): this
            getVolumeMusic(): number
        }
        var SoundManager: SoundManagerStatic

        interface SpriteSheetFrame {
            x: number,
            y: number
            width: number
            height: number
        }
        type SpriteSheetAnimation = {
            frames: number[]
            next?: string
            frequency: number
        }
        type SpriteSheetData = {
            frame: SpriteSheetFrame
            animations: {
                [key: string]: SpriteSheetAnimation
                [key: number]: SpriteSheetAnimation
            }
        }
        interface SpriteSheet extends Asset {
            frames: null | SpriteSheetFrame[]
            animations: null | SpriteSheetAnimation[]

            setup(params: SpriteSheetData): this
            getFrame(index: number): number
            getAnimation(name: string): SpriteSheetAnimation
        }
        interface SpriteSheetStatic {
            new(): SpriteSheet
            (): SpriteSheet
        }
        var SpriteSheet: SpriteSheetStatic

        interface Font extends Asset {
            format: string
            fontName: string | null

            setFontName(name: string): this
            getFontName(): string
        }
        interface FontStatic {
            new(): Font
            (): Font
        }
        var Font: FontStatic

    }

    namespace input {

        interface Input extends util.EventDispatcher {
            position: geom.Vector2
            startPosition: geom.Vector2
            deltaPosition: geom.Vector2
            prevPosition: geom.Vector2

            maxCacheNum: number
            minDistance: number
            maxDistance: number
            cachePositions: geom.Vector2[]
            flickVelocity: geom.Vector2
            flags: number

            //accessors
            x: number
            y: number
            dx: number
            dy: number
            fx: number
            fy: number

            update(): void
        }
        interface InputStatic {
            new(domElement: HTMLElement): Input
            (domElement: HTMLElement): Input

            defaults: {
                maxCacheNum: number
                minDistance: number
                maxDistance: number
            }
        }
        var Input: InputStatic

        interface Mouse extends Input {
            id: number

            getButton(button: string | number): boolean
            getButtonDown(button: string | number): boolean
            getButtonUp(button: string | number): boolean

            getPointing(): boolean
            getPointingStart(): boolean
            getPointingEnd(): boolean
        }
        interface MouseStatic {
            new(domElement: HTMLElement): Mouse
            (domElement: HTMLElement): Mouse

            BUTTON_LEFT: number
            BUTTON_MIDDLE: number
            BUTTON_RIGHT: number
        }
        var Mouse: MouseStatic

        interface Touch extends Input {
            id: null | number

            getTouch(): boolean
            getTouchStart(): boolean
            getTouchEnd(): boolean
            getPointing(): boolean
            getPointingStart(): boolean
            getPointingEnd(): boolean
        }
        interface TouchStatic {
            new(domElement: HTMLElement, isMulti: boolean): Touch
            (domElement: HTMLElement, isMulti: boolean): Touch
        }
        var Touch: TouchStatic

        interface TouchList {
            //accessor
            id: number

            domElement: HTMLElement
            touchMap: { [key: string]: Touch }
            touches: Touch[]
            getEmpty(): Touch
            getTouch(id: number): Touch
            removeTouch(touch: Touch): void
            update(): void
        }
        interface TouchListStatic {
            new(domElement: HTMLElement): Touch
            (domElement: HTMLElement): Touch
        }
        var TouchList: TouchListStatic

        type KeyType = keyof phina.input.KeyBoardStatic['KEY_CODE']
        interface KeyBoard extends Input {
            key: { [key: number]: boolean }
            press: { [key: number]: boolean }
            down: { [key: number]: boolean }
            up: { [key: number]: boolean }
            last: { [key: number]: boolean }

            update(): void
            getKey(key: number | KeyType): boolean
            getKeyDown(key: number | KeyType): boolean
            getKeyUp(key: number | KeyType): boolean
            getKeyAngle(): [boolean, boolean, boolean, boolean]
            getKeyDirection(): geom.Vector2
            setKey(key: number | KeyType, flag: boolean): this
            clearKey(): this
        }
        interface KeyBoardStatic {
            new(domElement: HTMLElement): KeyBoard
            (domElement: HTMLElement): KeyBoard

            ARROW_BIT_TO_ANGLE_TABLE: {
                0x01: number
                0x02: number
                0x04: number
                0x08: number
                0x06: number
                0x03: number
                0x0c: number
                0x09: number
                0x0e: number
                0x0d: number
                0x0b: number
                0x07: number
            }
            KEY_CODE: {
                'backspace': number
                'tab': number
                'enter': number
                'return': number
                'shift': number
                'ctrl': number
                'alt': number
                'pause': number
                'capslock': number
                'escape': number
                'pageup': number
                'pagedown': number
                'end': number
                'home': number
                'left': number
                'up': number
                'right': number
                'down': number
                'insert': number
                'delete': number

                '0': number
                '1': number
                '2': number
                '3': number
                '4': number
                '5': number
                '6': number
                '7': number
                '8': number
                '9': number

                'a': number
                'A': number
                'b': number
                'B': number
                'c': number
                'C': number
                'd': number
                'D': number
                'e': number
                'E': number
                'f': number
                'F': number
                'g': number
                'G': number
                'h': number
                'H': number
                'i': number
                'I': number
                'j': number
                'J': number
                'k': number
                'K': number
                'l': number
                'L': number
                'm': number
                'M': number
                'n': number
                'N': number
                'o': number
                'O': number
                'p': number
                'P': number
                'q': number
                'Q': number
                'r': number
                'R': number
                's': number
                'S': number
                't': number
                'T': number
                'u': number
                'U': number
                'v': number
                'V': number
                'w': number
                'W': number
                'x': number
                'X': number
                'y': number
                'Y': number
                'z': number
                'Z': number

                'numpad0': number
                'numpad1': number
                'numpad2': number
                'numpad3': number
                'numpad4': number
                'numpad5': number
                'numpad6': number
                'numpad7': number
                'numpad8': number
                'numpad9': number
                'multiply': number
                'add': number
                'subtract': number
                'decimalpoint': number
                'divide': number

                'f1': number
                'f2': number
                'f3': number
                'f4': number
                'f5': number
                'f6': number
                'f7': number
                'f8': number
                'f9': number
                'f10': number
                'f11': number
                'f12': number

                'numlock': number
                'scrolllock': number
                'semicolon': number
                'equalsign': number
                'comma': number
                'dash': number
                'period': number
                'forward': number
                '/': number
                'grave accent': number
                'open bracket': number
                'back slash': number
                'close bracket': number
                'single quote': number
                'space': number
            }
        }
        var KeyBoard: KeyBoardStatic

        interface GamepadManager extends util.EventDispatcher {
            gamepads: { [key: number]: Gamepad }

            update(): void

            get(index: number): Gamepad
            dispose(index: number): void
            isConnected(index: number): boolean
        }
        interface GamepadManagerStatic {
            new(): GamepadManager
            (): GamepadManager

            isAvailable: boolean
        }
        var GamepadManager: GamepadManagerStatic

        type GamepadButton = {
            value: number
            pressed: boolean
            last: boolean
            down: boolean
            up: boolean
        }
        interface Gamepad {
            index: number
            buttons: GamepadButton[]
            sticks: geom.Vector2[]

            id: null | number
            connected: boolean
            mapping: null | string
            timestamp: null | number

            getKey(button: string | number): boolean
            getKeyDown(button: string | number): boolean
            getKeyUp(button: string | number): boolean
            getKeyAngle(): void | number
            getKeyDirection(): geom.Vector2
            getStickAngle(stickId: number): number | void
        }
        interface GamepadStatic {
            new(index?: number): Gamepad
            (index?: number): Gamepad

            isAvailable: boolean

            ANALOG_BUTTON_THRESHOLD: number
            BUTTON_CODE: { [key: string]: number }
        }
        var Gamepad: GamepadStatic

        interface Accelerometer {
            gravity: geom.Vector3
            acceleration: geom.Vector3
            rotation: geom.Vector3
            orientation: geom.Vector3
        }
        interface AccelerometerStatic {
            new(): Accelerometer
            (): Accelerometer
        }
        var Accelerometer: AccelerometerStatic

    }

    namespace app {

        interface Updater {
            app: display.DomApp
            update(root: Element): void
        }
        interface UpdaterStatic {
            new(app: display.DomApp): Updater
            (app: display.DomApp): Updater
        }
        var Updater: UpdaterStatic

        interface Interactive {
            app: display.DomApp
            multiTouch: boolean
            cursor: {
                normal: string
                hover: string
            }

            enable(): this
            disable(): this
            check(root: display.DisplayScene): void
        }
        interface InteractiveStatic {
            new(app: display.DomApp): Interactive
            (app: display.DomApp): Interactive
        }
        var Interactive: InteractiveStatic

        interface BaseApp extends util.EventDispatcher {
            awake: boolean

            //accessors
            currentScene: display.DisplayScene
            rootScene: display.DisplayScene
            fps: number
            frame: number
            readonly deltaTime: number
            readonly elapsedTime: number
            readonly currentTime: number
            readonly startTime: number

            updater: Updater
            interactive: Interactive

            ticker: util.Ticker

            run(): this
            kill(): this
            replaceScene(scene: display.DisplayScene): this
            pushScene(scene: display.DisplayScene): this
            popScene(): display.DisplayScene
            start(): this
            enableStats(): this
            enableDatGUI(callback: Function): this
        }
        interface BaseAppStatic {
            new(): BaseApp
            (): BaseApp
        }
        var BaseApp: BaseAppStatic

        interface Element extends util.EventDispatcher {
            parent: null | Element
            children: Element[]
            awake: boolean

            update?(): void

            addChild(child: Element): Element
            addChildTo(parent: Element): this
            addChildAt(child: Element, index: number): Element
            getChildAt(index: number): Element
            getChildByName(name: string): Element //TODO
            getChildIndex(child: Element): number
            getParent(): void | Element
            getRoot(): void | Element
            removeChild(child: Element): this
            remove(): void | this
            isAwake(): boolean
            wakeUp(): this
            sleep(): this
            fromJson(json: {}): this
            toJson(): {}

            //accessory.js
            attach(accessory: accessory.Accessory): this
            detach(accessory: accessory.Accessory): this

            readonly tweener: accessory.Tweener
            readonly draggable: accessory.Draggable
            readonly flickable: accessory.Flickable
            readonly physical: accessory.Physical
        }
        interface ElementStatic {
            new(): Element
            (): Element
        }
        var Element: ElementStatic

        interface Object2DOptions {
            x?: number
            y?: number
            scaleX?: number
            scaleY?: number
            rotation?: number
            originX?: number
            originY?: number

            width?: number
            height?: number
            radius?: number
            boundingType?: string
        }
        interface Object2D extends Element {
            position: geom.Vector2
            rotation: number
            scale: number
            origin: geom.Vector2

            boundingType: string

            //accessors
            x: number
            y: number
            originX: number
            originY: number
            scaleX: number
            scaleY: number
            width: number
            height: number
            radius: number
            top: number
            right: number
            bottom: number
            left: number
            centerX: number
            centerY: number

            hitTest(x: number, y: number): boolean
            hitTestRect(x: number, y: number): boolean
            hitTestCircle(x: number, y: number): boolean
            hitTestElement(elm: geom.Rect): boolean
            globalToLocal(p: geom.Vector2): geom.Vector2
            setInteractive(flag: boolean, type: string): this
            setX(x: number): this
            setY(y: number): this
            setPosition(x: number, y: number): this
            setRotation(rotation: number): this
            setScale(x: number, y?: number): this
            setOrigin(x: number, y: number): this
            setWidth(width: number): this
            setHeight(height: number): this
            setSize(width: number, height: number): this
            setBoundingType(type: string): this
            moveTo(x: number, y: number): this
            moveBy(x: number, y: number): this
        }
        interface Object2DStatic {
            new(options?: Object2DOptions): Object2D
            (options?: Object2DOptions): Object2D

            defaults: {
                x: number
                y: number
                scaleX: number
                scaleY: number
                rotation: number
                originX: number
                originY: number

                width: number
                height: number
                radius: number
                boundingType: string
            }
        }
        var Object2D: Object2DStatic

        interface Scene extends Element {
            exit(naxtLabel: string, nextArguments: {}): this
        }
        interface SceneStatic {
            new(): Scene
            (): Scene
        }
        var Scene: SceneStatic

    }

    namespace accessory {

        interface Accessory extends util.EventDispatcher {
            setTarget(target: app.Element): this
            getTarget(): void | app.Element
            isAttached(): boolean
            attachTo(element: app.Element): this
            remove(): void
        }
        interface AccessoryStatic {
            new(target?: app.Element): Accessory
            (target?: app.Element): Accessory
        }
        var Accessory: AccessoryStatic

        type UpdateType = keyof TweenerStatic['UPDATE_MAP']
        interface Tweener extends Accessory {
            update(): void
            setUpdateType(type: UpdateType): this
            to(props: {}, duration?: number, easing?: util.EasingType): this
            by(props: {}, duration?: number, easing?: util.EasingType): this
            from(props: {}, duration?: number, easing?: util.EasingType): this
            wait(time: number): this
            call(func: (...args: any[]) => void, self?: {}, args?: any): this
            set(key: string, value: any): this
            moveTo(x: number, y: number, duration?: number, easing?: util.EasingType): this
            moveBy(x: number, y: number, duration?: number, easing?: util.EasingType): this
            rotateTo(rotation: number, duration?: number, easing?: util.EasingType): this
            rotateBy(rotation: number, duration?: number, easing?: util.EasingType): this
            scaleTo(scale: number, duration?: number, easing?: util.EasingType): this
            scaleBy(scale: number, duration?: number, easing?: util.EasingType): this
            fade(value: number, duration?: number, easing?: util.EasingType): this
            fadeOut(duration?: number, easing?: util.EasingType): this
            fadeIn(duration?: number, easing?: util.EasingType): this
            play(): this
            pause(): this
            stop(): this
            rewind(): this
            yoyo(): this
            setLoop(flag: boolean): this
            clear(): this
            fromJSON(json: {}): this
        }
        interface TweenerStatic {
            new(target?: app.Element): Tweener
            (target?: app.Element): Tweener

            UPDATE_MAP: {
                normal: {
                    func: (app: app.BaseApp) => number
                    duration: number
                }
                delta: {
                    func: (app: app.BaseApp) => number
                    duration: number
                }
                fps: {
                    func: (app: app.BaseApp) => number
                    duration: number
                }
            }
        }
        var Tweener: TweenerStatic

        interface Draggable extends Accessory {
            back(time?: number, easing?: util.EasingType): void
            enable(): void
        }
        interface DraggableStatic {
            new(target?: app.Element): Draggable
            (target?: app.Element): Draggable

            lock(): void
            unlock(): void
        }
        var Draggable: DraggableStatic

        interface Flickable extends Accessory {
            update(): void
            cancel(): void
            enable(): void
        }
        interface FlickableStatic {
            new(target?: app.Element): Flickable
            (target?: app.Element): Flickable
        }
        var Flickable: FlickableStatic

        interface FrameAnimation extends Accessory {
            paused: boolean
            finished: boolean
            fit: boolean

            update(): void
            gotoAndPlay(name: string, keep?: boolean): this
            gotoAndStop(name: string): this
        }
        interface FrameAnimationStatic {
            new(ss: string): FrameAnimation
            (ss: string): FrameAnimation
        }
        var FrameAnimation: FrameAnimationStatic

        interface Physical extends Accessory {
            velocity: geom.Vector2
            gravity: geom.Vector2
            friction: number

            update(): void
            force(x: number, y: number): this
            addForce(x: number, y: number): this
            setGravity(x: number, y: number): this
            setFriction(fr: number): this
        }
        interface PhysicalStatic {
            new(target?: app.Element): Physical
            (target?: app.Element): Physical
        }
        var Physical: PhysicalStatic

    }

    namespace graphics {

        interface Canvas {
            domElement: HTMLCanvasElement
            canvas: HTMLCanvasElement
            context: CanvasRenderingContext2D

            //accessors
            width: number
            height: number
            fillStyle: number
            strokeStyle: number
            globalAlpha: number
            globalCompositeOperation: string
            shadowBlur: number
            shadowColor: string
            shadowOffsetX: number
            shadowOffsetY: number
            lineCap: string
            lineJoin: string
            miterLimit: number
            lineWidth: number
            font: string
            textAlign: string
            textBaseLine: string
            imageSmoothingEnabled: boolean

            setSize(width: number, height: number): this
            setSizeToScreen(): void
            fitScreen(isEver: boolean): void
            clear(x: number, y: number, width: number, height: number): this
            clearColor(fillStyle: string, x: number, y: number, width: number, height: number): this
            biginPath(): this
            closePath(): this
            moveTo(x: number, y: number): this
            lineTo(x: number, y: number): this
            quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): this
            bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this
            fill(): this
            stroke(): this
            clip(): this
            drawPoint(x: number, y: number): this
            line(x0: number, y0: number, x1: number, y1: number): this
            drawLine(x0: number, y0: number, x1: number, y1: number): this
            drawDashLine(x0: number, y0: number, x1: number, y1: number, pattern: string | number): this
            drawArrow(x0: number, y0: number, x1: number, y1: number, arrowRadius: number): this
            lines(...points: number[]): this
            strokeLines(x0: number, y0: number, x1: number, y1: number): this
            fillLines(...points: number[]): this
            rect(x: number, y: number, width: number, height: number): this
            fillRect(x: number, y: number, w: number, h: number): this
            strokeRect(x: number, y: number, w: number, h: number): this
            roundRect(x: number, y: number, width: number, height: number, radius: number): this
            fillRoundRect(x: number, y: number, width: number, height: number, radius: number): this
            strokeRoundRect(x: number, y: number, width: number, height: number, radius: number): this
            circle(x: number, y: number, radius: number): this
            fillCircle(x: number, y: number, radius: number): this
            strokeCircle(x: number, y: number, radius: number): this
            arc(x: number, y: number, startAngle: number, setAngle: number, anticlockwise: boolean): this
            fillArc(x: number, y: number, startAngle: number, setAngle: number, anticlockwise: boolean): this
            strokeArc(x: number, y: number, startAngle: number, setAngle: number, anticlockwise: boolean): this
            pie(x: number, y: number, startAngle: number, setAngle: number, anticlockwise: boolean): this
            polygon(x: number, y: number, size: number, offsetAngle: number): this
            fillPolygon(x: number, y: number, size: number, offsetAngle: number): this
            strokePolygon(x: number, y: number, size: number, offsetAngle: number): this
            star(x: number, y: number, radius: number, sides: number, sideIndent: number, offsetAngle: number): this
            fillStar(x: number, y: number, radius: number, sides: number, sideIndent: number, offsetAngle: number): this
            strokeStar(x: number, y: number, radius: number, sides: number, sideIndent: number, offsetAngle: number): this
            heart(x: number, y: number, radius: number, angle: number): this
            fillHeart(x: number, y: number, radius: number, angle: number): this
            strokeHeart(x: number, y: number, radius: number, angle: number): this
            ellipse(x: number, y: number, w: number, h: number): this
            fillEllipse(x: number, y: number, w: number, h: number): this
            strokeEllipse(x: number, y: number, w: number, h: number): this
            fillText(text: string, x: number, y: number, maxWidth?: number): this
            strokeText(text: string, x: number, y: number, maxWidth?: number): this
            drawImage(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, dx: number, dy: number): this
            drawImage(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, dx: number, dy: number, dw: number, dh: number): this
            drawImage(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): this
            setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): this
            resetTransform(): this
            transformCenter(): this
            translate(x: number, y: number): this
            rotate(rotation: number): this
            scale(scaleX: number, scaleY: number): this
            save(): this
            restore(): this
            saveAsImage(mime_type: string): this
        }
        interface CanvasStatic {
            new(canvas?: string | HTMLCanvasElement): Canvas
            (canvas?: string | HTMLCanvasElement): Canvas

            measureText(font: string, text: string): TextMetrics
            createLinerGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient
            createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient
        }
        var Canvas: CanvasStatic

    }

    namespace display {

        interface DisplayElementOptions extends Partial<app.Object2DOptions> { }
        interface DisplayElement extends app.Object2D {
            visible: boolean
            alpha: number
            blendMode: string
            renderChildBySelf: boolean

            setVisible(flag: boolean): this
            show(): this
            hide(): this
            _calcWorldAlpha(): void
        }
        interface DisplayElementStatic {
            new(options?: DisplayElementOptions): DisplayElement
            (options?: DisplayElementOptions): DisplayElement
        }
        var DisplayElement: DisplayElementStatic

        interface PlainElementOptions extends Partial<DisplayElementOptions> { }
        interface PlainElement extends DisplayElement {
            canvas: graphics.Canvas

            draw(canvas: graphics.Canvas): void
        }
        interface PlainElementStatic {
            new(options?: PlainElementOptions): PlainElement
            (options?: PlainElementOptions): PlainElement
        }
        var PlainElement: PlainElementStatic

        interface ShapeOptions extends Partial<PlainElementOptions> {
            width?: number
            height?: number
            padding?: number
            backgroundColor?: string
            fill?: string
            stroke?: string
            strokeWidth?: number
            shadow?: boolean
            shadowBlur?: number
        }
        interface Shape extends PlainElement {
            padding: number
            backgroundColor: string
            fill: string
            stroke: string
            strokeWidth: number
            shadow: boolean
            shadowBlur: number
            watchDraw: boolean
            _dirtyDraw: boolean

            calcCanvasWidth(): number
            calcCanvasHeight(): number
            calcCanvasSize(): { width: number, height: number }
            isStrokable(): boolean
            prerender(canvas: graphics.Canvas): void
            postrender(canvas: graphics.Canvas): void
            renderFill(canvas: graphics.Canvas): void
            renderStroke(canvas: graphics.Canvas): void
            render(canvas: graphics.Canvas): this
        }
        interface ShapeStatic {
            new(options?: ShapeOptions): Shape
            (options?: ShapeOptions): Shape

            watchRenderProperty(key: string): void
            watchRenderProperties(keys: string[]): void
        }
        var Shape: ShapeStatic

        interface RectangleShapeOptions extends Partial<ShapeOptions> {
            backgroundColor?: string
            fill?: string
            stroke?: string
            strokeWidth?: number
            cornerRadius?: number
        }
        interface RectangleShape extends Shape {
            prerender(canvas: graphics.Canvas): void
        }
        interface RectangleShapeStatic {
            new(options?: RectangleShapeOptions): RectangleShape
            (options?: RectangleShapeOptions): RectangleShape
        }
        var RectangleShape: RectangleShapeStatic

        interface CircleShapeOptions extends Partial<ShapeOptions> {
            backgroundColor?: string
            fill?: string
            stroke?: string
            strokeWidth?: number
            radius?: number
        }
        interface CircleShape extends Shape {
            prerender(canvas: graphics.Canvas): void
        }
        interface CircleShapeStatic {
            new(options?: CircleShapeOptions): CircleShape
            (options?: CircleShapeOptions): CircleShape
        }
        var CircleShape: CircleShapeStatic

        interface TriangleShapeOptions extends Partial<ShapeOptions> {
            backgroundColor?: string
            fill?: string
            stroke?: string
            strokeWidth?: number
            radius?: number
        }
        interface TriangleShape extends Shape {
            prerender(canvas: graphics.Canvas): void
        }
        interface TriangleShapeStatic {
            new(options?: TriangleShapeOptions): TriangleShape
            (options?: TriangleShapeOptions): TriangleShape
        }
        var TriangleShape: TriangleShapeStatic

        interface StarShapeOptions extends Partial<ShapeOptions> {
            backgroundColor?: string
            fill?: string
            stroke?: string
            strokeWidth?: number
            radius?: number
            sides?: number
            sideIndent?: number
        }
        interface StarShape extends Shape {
            prerender(canvas: graphics.Canvas): void
        }
        interface StarShapeStatic {
            new(options?: StarShapeOptions): StarShape
            (options?: StarShapeOptions): StarShape
        }
        var StarShape: StarShapeStatic

        interface PolygonShapeOptions extends Partial<ShapeOptions> {
            backgroundColor?: string
            fill?: string
            stroke?: string
            strokeWidth?: number
            radius?: number
            sides?: number
        }
        interface PolygonShape extends Shape {
            prerender(canvas: graphics.Canvas): void
        }
        interface PolygonShapeStatic {
            new(options?: PolygonShapeOptions): PolygonShape
            (options?: PolygonShapeOptions): PolygonShape
        }
        var PolygonShape: PolygonShapeStatic

        interface HeartShapeOptions extends Partial<ShapeOptions> {
            backgroundColor?: string
            fill?: string
            stroke?: string
            strokeWidth?: number
            radius?: number
            scornerAngle?: number
        }
        interface HeartShape extends Shape {
            prerender(canvas: graphics.Canvas): void
        }
        interface HeartShapeStatic {
            new(options?: HeartShapeOptions): HeartShape
            (options?: HeartShapeOptions): HeartShape
        }
        var HeartShape: HeartShapeStatic

        interface PathShapeOptions extends Partial<ShapeOptions> {
            paths?: geom.Vector2[]
            lineJoin?: string
            lineCap?: string
        }
        interface PathShape extends Shape {
            setPaths(paths: geom.Vector2[]): this
            clear(): this
            addPaths(paths: geom.Vector2[]): this
            addPath(x: number, y: number): this
            getPath(i: number): geom.Vector2
            getPaths(): geom.Vector2[]
            changePath(i: number, x: number, y: number): this
            calcCanvasSize(): { width: number, height: number }
            calcCanvasWidth(): number
            calcCanvasHeight(): number
            prerender(canvas: graphics.Canvas): void
        }
        interface PathShapeStatic {
            new(options?: PathShapeOptions): PathShape
            (options?: PathShapeOptions): PathShape

            defaults: {
                fill: boolean
                backgroundColor: string
                lineCap: string
                lineJoin: string
            }
        }
        var PathShape: PathShapeStatic

        interface Sprite extends DisplayElement {
            //accessors
            image: string | asset.Texture | graphics.Canvas
            frameIndex: number

            draw(canvas: graphics.Canvas): void
            setImage(
                image: string | asset.Texture | graphics.Canvas,
                width?: number,
                height?: number): this
            setFrameIndex(index: number, width?: number, height?: number): this
        }
        interface SpriteStatic {
            new(
                image: string | asset.Texture | graphics.Canvas,
                width?: number,
                height?: number): Sprite
            (
                image: string | asset.Texture | graphics.Canvas,
                width?: number,
                height?: number): Sprite
        }
        var Sprite: SpriteStatic

        interface LabelOptions extends Partial<ShapeOptions> {
            backgroundColor?: string
            fill?: string
            stroke?: string
            strokeWidth?: number
            text?: string
            fontSize?: number
            fontWeight?: string
            fontFamily?: string
            align?: string
            baseline?: string
            lineHeight?: number
        }
        interface Label extends Shape {
            //accessors
            text: string
            font: string

            calcCanvasWidth(): number
            calcCanvasHeight(): number
            prerender(canvas: graphics.Canvas): void
            renderFill(canvas: graphics.Canvas): void
            renderStroke(canvas: graphics.Canvas): void
        }
        interface LabelStatic {
            new(options?: LabelOptions): Label
            (options?: LabelOptions): Label
            new(text?: string): Label
            (text?: string): Label

            defaults: {
                backgroundColor: string
                fill: string
                stroke: null
                strokeWidth: number
                text: string
                fontSize: number
                fontWeight: string
                fontFamily: string
                align: string
                baseline: string
                lineHeight: number
            }
        }
        var Label: LabelStatic

        interface DisplaySceneParams {
            width?: number
            height?: number
            backgroundColor?: string
        }
        interface DisplayScene extends app.Scene {
            hitTest(): boolean

            //TODO
            interactive: boolean
            setInteractive(flag: boolean): void

            canvas: graphics.Canvas
            renderer: CanvasRenderer
            backgroundColor: string
            width: number
            height: number
            gridX: util.Grid
            gridY: util.Grid
        }
        interface DisplaySceneStatic {
            new(params?: DisplaySceneParams): DisplayScene
            (params?: DisplaySceneParams): DisplayScene

            defaults: {
                width: number
                height: number
            }
        }
        var DisplayScene: DisplaySceneStatic

        interface LayerOptions {
            width?: number
            height?: number
        }
        interface Layer extends DisplayElement {
            draw(canvas: graphics.Canvas): void
        }
        interface LayerStatic {
            new(options?: LayerOptions): Layer
            (options?: LayerOptions): Layer
        }
        var Layer: LayerStatic

        interface CanvasLayerOptions extends Partial<LayerOptions> { }
        interface CanvasLayer extends Layer {
            draw(canvas: graphics.Canvas): void
        }
        interface CanvasLayerStatic {
            new(options?: CanvasLayerOptions): CanvasLayer
            (options?: CanvasLayerOptions): CanvasLayer
        }
        var CanvasLayer: CanvasLayerStatic

        interface CanvasRenderer {
            canvas: graphics.Canvas
            render(scene: DisplayScene): void
            renderChildren(obj: app.Object2D | graphics.Canvas): void
            renderObject(obj: app.Object2D | graphics.Canvas): void
        }
        interface CanvasRendererStatic {
            new(canvas: graphics.Canvas): CanvasRenderer
            (canvas: graphics.Canvas): CanvasRenderer
        }
        var CanvasRenderer: CanvasRendererStatic

        interface DomAppOptions {
            domElement?: HTMLElement
            query?: string
            fps?: number
            runner?: Function
        }
        interface DomApp extends app.BaseApp {
            domElement: HTMLElement
            mouse: input.Mouse
            touch: input.Touch
            touchList: input.TouchList
            keyboard: input.KeyBoard
            accelerometer: input.Accelerometer
            pointer: input.Touch
            pointers: input.Touch[]
        }
        interface DomAppStatic {
            new(options: DomAppOptions): DomApp
            (options: DomAppOptions): DomApp
        }
        var DomApp: DomAppStatic

        interface CanvasAppOptions extends Partial<DomAppOptions> {
            width?: number
            height?: number
            append?: boolean
            fit?: boolean
            pixelated?: boolean
        }
        interface CanvasApp extends DomApp {
            width: number
            height: number
            gridX: util.Grid
            gridY: util.Grid

            fitScreen(): void
        }
        interface CanvasAppStatic {
            new(options?: CanvasAppOptions): CanvasApp
            (options?: CanvasAppOptions): CanvasApp

            defaults: {
                width: number
                height: number
                columns: number
                fit: boolean
                appeend: boolean
            }
        }
        var CanvasApp: CanvasAppStatic

        interface WaveOptions extends Partial<CircleShapeOptions> { }
        interface Wave extends CircleShape {
        }
        interface WaveStatic {
            new(options?: WaveOptions): Wave
            (options?: WaveOptions): Wave
        }
        var Wave: WaveStatic

        /**
         * @deprecated
         */
        interface CanvasElement extends DisplayElement { }
        interface CanvasElementStatic {
            new(options?: DisplayElementOptions): CanvasElement
            (options?: DisplayElementOptions): CanvasElement
        }

        /**
         * @deprecated
         */
        interface CanvasScene extends DisplayScene { }
        interface CanvasSceneStatic {
            new(options?: DisplaySceneParams): CanvasScene
            (options?: DisplaySceneParams): CanvasScene
        }

    }

    namespace ui {

        interface ButtonOptions extends Partial<display.ShapeOptions> {
            cornerRadius?: number
            text?: string
            fontColor?: string
            fontSize?: number
            fontWeight?: string
            fontFamily?: string
        }
        interface Button extends display.Shape {
            prerender(canvas: graphics.Canvas): void
            postrender(canvas: graphics.Canvas): void
        }
        interface ButtonStatic {
            new(options?: ButtonOptions): Button
            (options?: ButtonOptions): Button

            defaults: {
                width: number
                height: number
                backgroundColor: string
                fill: string
                stroke: null

                cornerRadius: number
                text: string
                fontColor: string
                fontSize: number
                fontWeight: string
                fontFamily: string
            }
        }
        var Button: ButtonStatic

        interface GaugeOptions extends Partial<display.ShapeOptions> {
            value?: number
            maxValue?: number
            gaugeColor?: string
            cornerRadius?: number
        }
        interface Gauge extends display.Shape {
            //accessors
            value: number

            isFull(): boolean
            isEmpty(): boolean
            setValue(value: number): void
            getRate(): number
            prerender(canvas: graphics.Canvas): void
            postrender(canvas: graphics.Canvas): void

        }
        interface GaugeStatic {
            new(options?: GaugeOptions): Gauge
            (options?: GaugeOptions): Gauge
        }
        var Gauge: GaugeStatic

        interface CircleGaugeOptions extends Partial<GaugeOptions> {
            radius?: number
            anticlockwise?: boolean
            showPercentage?: boolean
        }
        interface CircleGauge extends Gauge {
            prerender(canvas: graphics.Canvas): void
            renderFill(canvas: graphics.Canvas): void
            renderStroke(canvas: graphics.Canvas): void
            postrender(): void//TODO
        }
        interface CircleGaugeStatic {
            new(options?: CircleGaugeOptions): CircleGauge
            (options?: CircleGaugeOptions): CircleGauge
        }
        var CircleGauge: CircleGaugeStatic

        interface LabelAreaOptions extends Partial<display.LabelOptions> {
            verticalAlign?: number | string
            scroll?: geom.Vector2
            scrollX?: number
            scrollY?: number
        }
        interface LabelArea extends display.Label {
            //accessors
            text: string
            scrollX: number
            scrollY: number

            calcCanvasWidth(): number
            calcCanvasHeight(): number
            getOffsetY(): number
            getOffsetX(): number
            getTextWidthCache(): { [key: string]: number }
            spliceLines(lines: string[]): string[]
            getLines(): string[]
            prerender(canvas: graphics.Canvas): void
            renderFill(canvas: graphics.Canvas): void
            renderStroke(canvas: graphics.Canvas): void

            enableScroll(): this //TODO?
        }
        interface LabelAreaStatic {
            new(options?: LabelAreaOptions): LabelArea
            (options?: LabelAreaOptions): LabelArea

            defaults: {
                verticalAlign: string
                align: string
                baseline: string
                width: number
                height: number
                scrollX: number
                scrollY: number
            }
            alignToOffsetMap: {
                start: number
                left: number
                center: number
                end: number
                right: number
            }
            verticalAlignToOffsetMap: {
                top: number
                center: number
                middle: number
                bottom: number
            }
        }
        var LabelArea: LabelAreaStatic

    }

    namespace game {

        interface ManagerSceneData {
            className: string
            label: string | number
            nextLabel: string | number
            arguments?: {}
            nextArguments?: {}
        }
        interface ManagerScene extends app.Scene {
            setScene(scenes: ManagerSceneData[]): this
            replaceScene(label: string | number, args: {}): this
            gotoScene(label: string | number, args: {}): this
            gotoNext(args: {}): this
            getCurrentSceneIndex(): number
            labelToIndex(label: string): number
            indexToLabel(index: number): string
            onnext(e: any): void
        }
        interface ManagerSceneStatic {
            new(options: {
                scenes: ManagerSceneData[]
                startLabel?: string | number
            }): ManagerScene
            (options: {
                scenes: ManagerSceneData[]
                startLabel?: string | number
            }): ManagerScene
        }
        var ManagerScene: ManagerSceneStatic

        interface GameAppOptions extends Partial<display.CanvasAppOptions> {
            startLabel?: string
            scenes?: ManagerSceneData[]
            assets?: {}
            autoPause?: boolean
        }
        interface GameApp extends display.CanvasApp {
        }
        interface GameAppStatic {
            new(options?: GameAppOptions): GameApp
            (options?: GameAppOptions): GameApp
        }
        var GameApp: GameAppStatic

    }

    namespace social {

        interface TwitterCreateURLOptions {
            text?: string
            hashtags?: string
            url?: string
        }
        interface Twitter {
        }
        interface TwitterStatic {
            new(): Twitter
            (): Twitter

            createURL(options: TwitterCreateURLOptions): string

            defaults: {
                text: string
                hashtags: string
                url: string
            }
        }
        var Twitter: TwitterStatic

    }

}

declare global {

    interface Object {
        $method(name: string, fn: Function): void
        setter(name: string, fn: Function): void
        getter(name: string, fn: Function): void
        accessor(name: string, param: { set: Function, get: Function }): void
        forIn(fn: Function, self?: {}): this
        $get(key: string): any
        $set(key: string, value: any): void
        $has(key: string): boolean
        $extend(...objects: {}[]): this
        $safe(...objects: {}[]): this
        $strict(...objects: {}[]): this
        $pick(...keys: string[]): {}
        $omit(...keys: string[]): {}
        $toArray(): any[]
        $watch(key: string, callback: Function): void
    }

    interface Number {
        round(figure?: number): number
        ceil(figure?: number): number
        floor(figure?: number): number
        toInt(): number
        toHex(): string
        toBin(): string
        toUnsigned(): number
        padding(n: number, ch?: string): string
        times(fn: Function, self?: {}): this
        upto(t: number, fn: Function, self?: {}): this
        downto(t: number, fn: Function, self?: {}): this
        step(limit: number, step: number, fn: Function, self?: {}): this
        map<T>(fn: (i: number) => any, self?: {}): T[]
        abs(): number
        acos(): number
        asin(): number
        atan(): number
        cos(): number
        exp(): number
        log(): number
        max(value: number): number
        min(value: number): number
        clamp(min: number, max: number): number
        pow(exponent: number): number
        sin(): number
        sqrt(): number
        tan(): number
        toDegree(): number
        toRadian(): number
    }

    interface String {
        format(arg: { [key: string]: any }): string
        format(...args: any[]): string
        trim(): string
        capitalize(): string
        capitalizeFirstLetter(): string
        toDash(): string
        toHash(): number
        padding(n: number, ch?: string): string
        paddingLeft(n: number, ch?: string): string
        paddingRight(n: number, ch?: string): string
        quotemeta(): string
        repeat(n: number): string
        count(str: string): number
        include(str: string): boolean
        each(fn: Function, self?: {}): this
        toArray(): string[]
        toObject(sep?: string, eq?: string): {}
        toCRC32(): number
    }

    interface Array<T> {
        //accessors
        first: T
        last: T

        equals(arr: any[]): boolean
        deepEquals(arr: any[]): boolean
        contains(item: any, fromIndex?: number): boolean
        at(i: number): T
        find(fn: (elm: T, i: number, self: this) => boolean, self?: {}): T & void
        findIndex(fn: (elm: T, i: number, self: this) => boolean, self?: {}): number
        swap(a: number, b: number): this
        erase(elm: any): this
        eraseAll(elm: any): this
        eraseIf(fn: (elm: T, i: number, self: this) => boolean | void): this
        eraseIfAll(fn: (elm: T, i: number, self: this) => boolean | void): this
        random(min?: number, max?: number): T
        pickup(min?: number, max?: number): T
        lot(min?: number, max?: number): T
        uniq(deep: number): T[]
        flatten(level?: number): any[]
        clone(deep?: boolean): T[]
        clear(): this
        fill(value: T, start?: number, end?: number): this
        range(range: number): this
        range(start: number, end: number, step?: number): this
        shuffle(): this
        sum(): number
        average(): number
        each(fn: (elm: T, i: number, self: this) => void, self?: {}): this
        toULElement(): any //TODO
        toOLElement(): any //TODO

        most(func?: (elm: T, i: number, self: this) => T, self?: {}): { max: T, min: T }
    }
    interface ArrayConstructor {
        range(range: number): number[]
        range(start: number, end: number, step?: number): number[]
        of(...args: any[]): any[]
        of<T>(...args: T[]): T[]
        from(arrayLike: {}, callback?: Function, context?: {}): any[]
    }

    interface Date {
        format(pattern: string): string
        calculateAge(birthday: string | Date, when?: string | Date): number
    }

    interface Math {
        DEG_TO_RAD: number
        RAD_TO_DEG: number
        PHI: number
        degToRad(deg: number): number
        radToDeg(rad: number): number
        clamp(value: number, min: number, max: number): number
        inside(value: number, min: number, max: number): boolean
        randint(min: number, max: number): number
        randfloat(min: number, max: number): number
        randbool(perecent?: number): boolean
    }

    interface Event {
        stop(): void
    }

    interface MouseEvent {
        //accessors
        readonly pointX: number
        readonly pointY: number
    }

    interface TouchEvent {
        //accessors
        readonly pointX: number
        readonly pointY: number
    }

    interface Touch {
        //accessors
        readonly pointX: number
        readonly pointY: number
    }

}