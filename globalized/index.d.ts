import phina = require('..')
export = phina

declare global {

    type Vector2 = phina.geom.Vector2
    var Vector2: phina.geom.Vector2Static

    type Vector3 = phina.geom.Vector3
    var Vector3: phina.geom.Vector3Static

    type Matrix33 = phina.geom.Matrix33
    var Matrix33: phina.geom.Matrix33Static

    type Rect = phina.geom.Rect
    var Rect: phina.geom.RectStatic

    type Circle = phina.geom.Circle
    var Circle: phina.geom.CircleStatic

    var Collision: phina.geom.CollisionStatic

    type EventDispatcher = phina.util.EventDispatcher
    var EventDispatcher: phina.util.EventDispatcherStatic

    type Tween = phina.util.Tween
    var Tween: phina.util.TweenStatic

    type Ticker = phina.util.Ticker
    var Ticker: phina.util.TickerStatic

    type Grid = phina.util.Grid
    var Grid: phina.util.GridStatic

    type ChangeDispatcher = phina.util.ChangeDispatcher
    var ChangeDispatcher: phina.util.ChangeDispatcherStatic

    type Flow<T> = phina.util.Flow<T>
    var Flow: phina.util.FlowStatic

    type Color = phina.util.Color
    var Color: phina.util.ColorStatic

    type Random = phina.util.Random
    var Random: phina.util.RandomStatic

    var QueryString: phina.util.QueryStringStatic

    var Ajax: phina.util.AjaxStatic

    var Support: phina.util.SupportStatic

    type Asset = phina.asset.Asset
    var Asset: phina.asset.AssetStatic

    var AssetManager: phina.asset.AssetManagerStatic

    type AssetLoader = phina.asset.AssetLoader
    var AssetLoader: phina.asset.AssetLoaderStatic

    //type File = phina.asset.File
    //var File: phina.asset.FileStatic

    type Script = phina.asset.Script
    var Script: phina.asset.ScriptStatic

    type Texture = phina.asset.Texture
    var Texture: phina.asset.TextureStatic

    type Sound = phina.asset.Sound
    var Sound: phina.asset.SoundStatic

    var SoundManager: phina.asset.SoundManagerStatic

    type SpriteSheet = phina.asset.SpriteSheet
    var SpriteSheet: phina.asset.SpriteSheetStatic

    type Font = phina.asset.Font
    var Font: phina.asset.FontStatic

    type Input = phina.input.Input
    var Input: phina.input.InputStatic

    type Mouse = phina.input.Mouse
    var Mouse: phina.input.MouseStatic

    //type Touch = phina.input.Touch
    //var Touch: phina.input.Touch

    //type TouchList = phina.input.TouchList
    //var TouchList: phina.input.TouchListStatic

    type KeyBoard = phina.input.KeyBoard
    var KeyBoard: phina.input.KeyBoardStatic

    type GamepadManager = phina.input.GamepadManager
    var GamepadManager: phina.input.GamepadManagerStatic

    //type Gamepad = phina.input.Gamepad
    //var Gamepad: phina.input.GamepadStatic

    type Accelerometer = phina.input.Accelerometer
    var Accelerometer: phina.input.AccelerometerStatic

    type Updater = phina.app.Updater
    var Updater: phina.app.UpdaterStatic

    type Interactive = phina.app.Interactive
    var Interactive: phina.app.InteractiveStatic

    type BaseApp = phina.app.BaseApp
    var BaseApp: phina.app.BaseAppStatic

    //type Element = phina.app.Element
    //var Element: phina.app.ElementStatic

    type Object2D = phina.app.Object2D
    var Object2D: phina.app.Object2DStatic

    type Scene = phina.app.Scene
    var Scene: phina.app.SceneStatic

    type Accessory = phina.accessory.Accessory
    var Accessory: phina.accessory.AccessoryStatic

    type Tweener = phina.accessory.Tweener
    var Tweener: phina.accessory.TweenerStatic

    type Draggable = phina.accessory.Draggable
    var Draggable: phina.accessory.DraggableStatic

    type Flickable = phina.accessory.Flickable
    var Flickable: phina.accessory.FlickableStatic

    type FrameAnimation = phina.accessory.FrameAnimation
    var FrameAnimation: phina.accessory.FrameAnimationStatic

    type Physical = phina.accessory.Physical
    var Physical: phina.accessory.PhysicalStatic

    type Canvas = phina.graphics.Canvas
    var Canvas: phina.graphics.CanvasStatic

    type DisplayElement = phina.display.DisplayElement
    var DisplayElement: phina.display.DisplayElementStatic

    type PlainElement = phina.display.PlainElement
    var PlainElement: phina.display.PlainElementStatic

    type Shape = phina.display.Shape
    var Shape: phina.display.ShapeStatic

    type RectangleShape = phina.display.RectangleShape
    var RectangleShape: phina.display.RectangleShapeStatic

    type CircleShape = phina.display.CircleShape
    var CircleShape: phina.display.CircleShapeStatic

    type TriangleShape = phina.display.TriangleShape
    var TriangleShape: phina.display.TriangleShapeStatic

    type StarShape = phina.display.StarShape
    var StarShape: phina.display.StarShapeStatic

    type PolygonShape = phina.display.PolygonShape
    var PolygonShape: phina.display.PolygonShapeStatic

    type HeartShape = phina.display.HeartShape
    var HeartShape: phina.display.HeartShapeStatic

    type PathShape = phina.display.PathShape
    var PathShape: phina.display.PathShapeStatic

    type Sprite = phina.display.Sprite
    var Sprite: phina.display.SpriteStatic

    type Label = phina.display.Label
    var Label: phina.display.LabelStatic

    type DisplayScene = phina.display.DisplayScene
    var DisplayScene: phina.display.DisplaySceneStatic

    type Layer = phina.display.Layer
    var Layer: phina.display.LayerStatic

    type CanvasLayer = phina.display.CanvasLayer
    var CanvasLayer: phina.display.CanvasLayerStatic

    type CanvasRenderer = phina.display.CanvasRenderer
    var CanvasRenderer: phina.display.CanvasRendererStatic

    type DomApp = phina.display.DomApp
    var DomApp: phina.display.DomAppStatic

    type CanvasApp = phina.display.CanvasApp
    var CanvasApp: phina.display.CanvasAppStatic

    type Wave = phina.display.Wave
    var Wave: phina.display.WaveStatic

    type Button = phina.ui.Button
    var Button: phina.ui.ButtonStatic

    type Gauge = phina.ui.Gauge
    var Gauge: phina.ui.GaugeStatic

    type CircleGauge = phina.ui.CircleGauge
    var CircleGauge: phina.ui.CircleGaugeStatic

    type LabelArea = phina.ui.LabelArea
    var LabelArea: phina.ui.LabelAreaStatic

    type ManagerScene = phina.game.ManagerScene
    var ManagerScene: phina.game.ManagerSceneStatic

    type GameApp = phina.game.GameApp
    var GameApp: phina.game.GameAppStatic

    /** @deprecated */
    type CanvasElement = phina.display.CanvasElement
    var CanvasElement: phina.display.CanvasElementStatic

    /** @deprecated */
    type CanvasScene = phina.display.CanvasScene
    var CanvasScene: phina.display.CanvasSceneStatic

    type Twitter = phina.social.Twitter
    var Twetter: phina.social.Twitter

}