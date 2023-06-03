import { RendererSDK, tryFindFile } from "github.com/octarine-public/wrapper/index"

function LoadFontWrapper(path: string, isFallback = false) {
	const realPath = tryFindFile(path)
	if (realPath !== undefined) {
		LoadFont(realPath, isFallback)
	} else {
		console.error(`Failed to find font file ${path}`)
	}
}

RendererSDK.CreateFont("Open Sans", "fonts/Consolas/Consolas-Bold.ttf", 700, false)
RendererSDK.CreateFont("Open Sans", "fonts/Consolas/Consolas-BoldItalic.ttf", 700, true)
RendererSDK.CreateFont("Open Sans", "fonts/Consolas/Consolas-Regular.ttf", 400, false)
RendererSDK.CreateFont("Open Sans", "fonts/Consolas/Consolas-Italic.ttf", 400, true)

RendererSDK.CreateFont("PT Sans", "fonts/Consolas/Consolas-Bold.ttf", 700, false)
RendererSDK.CreateFont("PT Sans", "fonts/Consolas/Consolas-BoldItalic.ttf", 700, true)
RendererSDK.CreateFont("PT Sans", "fonts/Consolas/Consolas-Regular.ttf", 400, false)
RendererSDK.CreateFont("PT Sans", "fonts/Consolas/Consolas-Italic.ttf", 400, true)

RendererSDK.CreateFont("Roboto", "fonts/Consolas/Consolas-Bold.ttf", 700, false)
RendererSDK.CreateFont("Roboto", "fonts/Consolas/Consolas-BoldItalic.ttf", 700, true)
RendererSDK.CreateFont("Roboto", "fonts/Consolas/Consolas-Regular.ttf", 400, false)
RendererSDK.CreateFont("Roboto", "fonts/Consolas/Consolas-Italic.ttf", 400, true)

RendererSDK.CreateFont("Calibri", "fonts/Consolas/Consolas-Bold.ttf", 700, false)
RendererSDK.CreateFont("Calibri", "fonts/Consolas/Consolas-BoldItalic.ttf", 700, true)
RendererSDK.CreateFont("Calibri", "fonts/Consolas/Consolas-Regular.ttf", 400, false)
RendererSDK.CreateFont("Calibri", "fonts/Consolas/Consolas-Italic.ttf", 400, true)

RendererSDK.CreateFont("Consolas", "fonts/Consolas/Consolas-Bold.ttf", 700, false)
RendererSDK.CreateFont("Consolas", "fonts/Consolas/Consolas-BoldItalic.ttf", 700, true)
RendererSDK.CreateFont("Consolas", "fonts/Consolas/Consolas-Regular.ttf", 400, false)
RendererSDK.CreateFont("Consolas", "fonts/Consolas/Consolas-Italic.ttf", 400, true)

LoadFontWrapper("fonts/Consolas/Consolas-Bold.ttf")
LoadFontWrapper("fonts/Consolas/Consolas-BoldItalic.ttf")
LoadFontWrapper("fonts/Consolas/Consolas-Regular.ttf")
LoadFontWrapper("fonts/Consolas/Consolas-Italic.ttf")


LoadFontWrapper("fonts/NotoEmoji/NotoEmoji-Regular.ttf", true)
