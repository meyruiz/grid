#pragma checksum "/Users/mruiz/Documents/Epicor/grid/WebApplication3/Pages/Contact.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "1b59d6b891da4f02928534d9a52ab316614606f5"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(WebApplication3.Pages.Pages_Contact), @"mvc.1.0.razor-page", @"/Pages/Contact.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure.RazorPageAttribute(@"/Pages/Contact.cshtml", typeof(WebApplication3.Pages.Pages_Contact), null)]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"1b59d6b891da4f02928534d9a52ab316614606f5", @"/Pages/Contact.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a64b521ac138c6da0e93a85035667d8df058d0b4", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Contact : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 3 "/Users/mruiz/Documents/Epicor/grid/WebApplication3/Pages/Contact.cshtml"
  
    ViewData["Title"] = "Home page";

#line default
#line hidden
            BeginContext(66, 1, true);
            WriteLiteral("\n");
            EndContext();
            BeginContext(67, 2378, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "25785b5fde2f487380e8af2f6a340c2c", async() => {
                BeginContext(73, 2365, true);
                WriteLiteral(@"
    <div class=""row"">
        <div id=""scale"" class=""col-md-2 border border-dark"">
            <p>Scale</p>
            <p>2' x 1.00""</p>
            <hr />
            <button type=""button"" class=""btn btn-primary"">Add Cut</button>
            <hr />
            <button type=""button"" class=""btn"" style=""margin-bottom:15px;"">Zoom In</button>
            <button type=""button"" class=""btn"">Zoom Out</button>
        </div>
        <div class=""col-md-10"">
            <div class=""row"">
                <div class=""col-md-12 border border-dark"">
                    <p>SIZE: 600' X 84.0000"" ITEM: FERROFLEX STEEL REINFORCED BELT    LOT: D0118990-B    CUST: ACME MINING OF MINNESOTA, INC</p>
                    <p>REQUIRED: 2 CUTS - 80'6.0000"" X 36.0000 ****1 OF 2 ADDED ****</p>
                </div>
            </div>
            <div class=""row"">
                <div class=""col-md-12 border border-dark"">
                    <div id=""gridCanvas"" style=""padding: 17px 10px; position: relative;"">
                    </div>");
                WriteLiteral(@"
                </div>
            </div>
        </div>
    </div>
    <div class=""modal fade"" id=""exampleModal"" tabindex=""-1"" role=""dialog"" aria-labelledby=""exampleModalLabel"" aria-hidden=""true"">
        <div class=""modal-dialog"" role=""document"">
            <div class=""modal-content"">
                <div class=""modal-header"">
                    <h5 class=""modal-title"" id=""exampleModalLabel"">Enter Cut Size</h5>
                    <button type=""button"" class=""close"" data-dismiss=""modal"" aria-label=""Close"">
                        <span aria-hidden=""true"">&times;</span>
                    </button>
                </div>
                <div class=""modal-body"">
                    <p>Length: <input id=""lengthFT"" type=""text"" name=""lengthFT""> FT <input id=""lengthIN"" type=""text"" name=""lengthIN""> IN </p>
                    <p>Width: <input id=""widthIN"" type=""text"" name=""widthIN""> IN </p>
                </div>
                <div class=""modal-footer"">
                    <button type=""button"" class=""btn bt");
                WriteLiteral(@"n-secondary"" data-dismiss=""modal"">Close</button>
                    <button type=""button"" class=""btn btn-primary"" onclick=""createSquare()"">Create</button>
                </div>
            </div>
        </div>
    </div>
    <script async defer id=""github-bjs"" src=""https://buttons.github.io/buttons.js""></script>
");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2445, 2607, true);
            WriteLiteral(@"


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
        var width = document.getElementById(""lengthFT"").value * gridSize + ((document.getElementById(""lengthIN"").value / 12) * gridSize);
        var height = document.getElementById(""widthIN"").value * gridSize;
        x = Math.floor(x / width) * width;
        y = Math.floor(y / height) * height;
        console.log(x); console.log(y);
        var sq = document.createElement('div');
        sq.style.position = ""absolute"";
        sq.style.width = width + 'px';
        sq.style.height = height + 'px';
        sq.style.transform = 'translate(' + x + 'px,' + y");
            WriteLiteral(@" + 'px)';
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
                var x = Math.floor(e.clientX / gridSize) * gridSize;
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
            var start");
            WriteLiteral(@" = gridSize * x;
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
        document.getElementById(""gridCanvas"").appendChild(canvas);
        return canvas;
    }
</script>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IndexModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel>)PageContext?.ViewData;
        public IndexModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591
