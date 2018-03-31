# phina.js.d.ts

## このリポジトリについて
phina.js用の**非公式**の型定義ファイルです。v0.2.3に対応しています。

型定義よりも入力補完向きです。

## インストール
このリポジトリをインストールします。

`npm install negiwine/phina.js.d.ts`

次にtsconfig.json(またはjsconfig.json)に型定義ファイルのパスを記述します。
`phina.globalize()`を使用する場合としない場合とで異なります。

### `phina.globalize()`を使用する場合
```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "phina.js": [
                "node_modules/phina.js.d.ts/globalized"
            ]
        }
    }
}
```

### `phina.globalize()`を使用しない場合
```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "phina.js": [
                "node_modules/phina.js.d.ts"
            ]
        }
    }
}
```

baseUrl及びnode_modulesのパスは環境に合わせて変えてください。

## License
MIT