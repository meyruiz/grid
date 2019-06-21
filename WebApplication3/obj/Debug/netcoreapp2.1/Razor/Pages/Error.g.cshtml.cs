#pragma checksum "/Users/mruiz/Documents/Epicor/grid/WebApplication3/Pages/Error.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ae89a7008600694f5f53b9e7ef238a3b46923182"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(WebApplication3.Pages.Pages_Error), @"mvc.1.0.razor-page", @"/Pages/Error.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure.RazorPageAttribute(@"/Pages/Error.cshtml", typeof(WebApplication3.Pages.Pages_Error), null)]
namespace WebApplication3.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "/Users/mruiz/Documents/Epicor/grid/WebApplication3/Pages/_ViewImports.cshtml"
using WebApplication3;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ae89a7008600694f5f53b9e7ef238a3b46923182", @"/Pages/Error.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a64b521ac138c6da0e93a85035667d8df058d0b4", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Error : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 3 "/Users/mruiz/Documents/Epicor/grid/WebApplication3/Pages/Error.cshtml"
  
    ViewData["Title"] = "Error";

#line default
#line hidden
            BeginContext(62, 116, true);
            WriteLiteral("\n<h1 class=\"text-danger\">Error.</h1>\n<h2 class=\"text-danger\">An error occurred while processing your request.</h2>\n\n");
            EndContext();
#line 10 "/Users/mruiz/Documents/Epicor/grid/WebApplication3/Pages/Error.cshtml"
 if (Model.ShowRequestId)
{

#line default
#line hidden
            BeginContext(206, 51, true);
            WriteLiteral("    <p>\n        <strong>Request ID:</strong> <code>");
            EndContext();
            BeginContext(258, 15, false);
#line 13 "/Users/mruiz/Documents/Epicor/grid/WebApplication3/Pages/Error.cshtml"
                                      Write(Model.RequestId);

#line default
#line hidden
            EndContext();
            BeginContext(273, 17, true);
            WriteLiteral("</code>\n    </p>\n");
            EndContext();
#line 15 "/Users/mruiz/Documents/Epicor/grid/WebApplication3/Pages/Error.cshtml"
}

#line default
#line hidden
            BeginContext(292, 3172, true);
            WriteLiteral(@"
<h3>Development Mode</h3>
<p>
    Swapping to <strong>Development</strong> environment will display more detailed information about the error that occurred.
</p>
<p>
    <strong>Development environment should not be enabled in deployed applications</strong>, as it can result in sensitive information from exceptions being displayed to end users. For local debugging, development environment can be enabled by setting the <strong>ASPNETCORE_ENVIRONMENT</strong> environment variable to <strong>Development</strong>, and restarting the application.
</p>

<script>

    var canvasElementId = 'gridCanvas';

    // Size of each grid cell in pixels.
    var gridSize = 20;
    // Create Canvas
    var canvas = createCanvas(800, 400);
    var ctx = canvas.getContext('2d');
    var event;


    // Add square when clicked.
    canvas.onclick = function (e) {
        $('#exampleModal').modal('show');
        event = e;
    }

    function createSquare() {
        var x = event.clientX;
        var y = event.clientY;

       ");
            WriteLiteral(@" var width = document.getElementById(""lengthFT"").value * gridSize + ((document.getElementById(""lengthIN"").value / 12) * gridSize);
        var height = document.getElementById(""widthIN"").value * gridSize;
        x = Math.floor(x / width) * width;
        y = Math.floor(y / height) * height;

        console.log(x);console.log(y);

        var sq = document.createElement('div');
        sq.style.position = ""absolute"";
        sq.style.width = width + 'px';
        sq.style.height = height + 'px';
        sq.style.transform = 'translate(' + x + 'px,' + y + 'px)';
        sq.style.backgroundColor = 'rgba(72,132,192,1)';
        sq.style.borderStyle = 'solid';
        sq.style.borderWidth = '2px';
        sq.style.cursor = 'move';

        // Drag/Drop.
        sq.onmousedown = function () {
            document.onmouseup = function () {
                document.onmousemove = document.onmouseup = '';
            }
            document.onmousemove = (e) => {
                var x = Math.floor(e.clientX / gridSize");
            WriteLiteral(@") * gridSize;
                var y = Math.floor(e.clientY / gridSize) * gridSize;
                this.style.transform = 'translate(' + x + 'px,' + y + 'px)';
            }

        }

        document.body.appendChild(sq);
        $('#exampleModal').modal('hide');
    }

    // Draw Grid.
    drawGrid(ctx, gridSize, canvas.width, canvas.height);

    function drawGrid(ctx, gridSize, w, h) {
        var linesX = w / gridSize;
        var linesY = h / gridSize;
        ctx.strokeStyle = '#CCC';
        for (var x = 0; x < linesX; x++) {
            var start = gridSize * x;
            ctx.moveTo(start, 0);
            ctx.lineTo(start, h);
            ctx.stroke();
        }
        for (var y = 0; y < linesY; y++) {
            var start = gridSize * y;
            ctx.moveTo(0, start);
            ctx.lineTo(w, start);
            ctx.stroke();
        }
    }

    function createCanvas(w, h) {
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
     ");
            WriteLiteral("   document.getElementById(\"gridCanvas\").appendChild(canvas);\n        return canvas;\n    }\n</script>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<ErrorModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<ErrorModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<ErrorModel>)PageContext?.ViewData;
        public ErrorModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591
