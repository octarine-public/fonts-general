import { RendererSDK, tryFindFile } from "./wrapper/Imports"

function LoadFontWrapper(path: string, isFallback = false) {
	const realPath = tryFindFile(path)
	if (realPath !== undefined)
		LoadFont(realPath, isFallback)
	else
		console.error(`Failed to find font file ${path}`)
}

RendererSDK.CreateFont("Open Sans", "fonts/OpenSans/OpenSans-Bold.ttf", 700, false)
RendererSDK.CreateFont("Open Sans", "fonts/OpenSans/OpenSans-BoldItalic.ttf", 700, true)
RendererSDK.CreateFont("Open Sans", "fonts/OpenSans/OpenSans-Regular.ttf", 400, false)
RendererSDK.CreateFont("Open Sans", "fonts/OpenSans/OpenSans-Italic.ttf", 400, true)

LoadFontWrapper("fonts/OpenSans/OpenSans-Bold.ttf")
LoadFontWrapper("fonts/OpenSans/OpenSans-BoldItalic.ttf")
LoadFontWrapper("fonts/OpenSans/OpenSans-Regular.ttf")
LoadFontWrapper("fonts/OpenSans/OpenSans-Italic.ttf")

RendererSDK.CreateFont("PT Sans", "fonts/PTSans/PTSans-Bold.ttf", 700, false)
RendererSDK.CreateFont("PT Sans", "fonts/PTSans/PTSans-BoldItalic.ttf", 700, true)
RendererSDK.CreateFont("PT Sans", "fonts/PTSans/PTSans-Regular.ttf", 400, false)
RendererSDK.CreateFont("PT Sans", "fonts/PTSans/PTSans-Italic.ttf", 400, true)

LoadFontWrapper("fonts/PTSans/PTSans-Bold.ttf")
LoadFontWrapper("fonts/PTSans/PTSans-BoldItalic.ttf")
LoadFontWrapper("fonts/PTSans/PTSans-Regular.ttf")
LoadFontWrapper("fonts/PTSans/PTSans-Italic.ttf")

RendererSDK.CreateFont("Roboto", "fonts/Roboto/Roboto-Bold.ttf", 700, false)
RendererSDK.CreateFont("Roboto", "fonts/Roboto/Roboto-BoldItalic.ttf", 700, true)
RendererSDK.CreateFont("Roboto", "fonts/Roboto/Roboto-Regular.ttf", 400, false)
RendererSDK.CreateFont("Roboto", "fonts/Roboto/Roboto-Italic.ttf", 400, true)

LoadFontWrapper("fonts/Roboto/Roboto-Bold.ttf")
LoadFontWrapper("fonts/Roboto/Roboto-BoldItalic.ttf")
LoadFontWrapper("fonts/Roboto/Roboto-Regular.ttf", true)
LoadFontWrapper("fonts/Roboto/Roboto-Italic.ttf")

LoadFontWrapper("fonts/NotoEmoji/NotoEmoji-Regular.ttf", true)
