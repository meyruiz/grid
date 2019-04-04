#pragma checksum "C:\Users\mayra.ruiz\OneDrive - Epicor\Documents\grid\WebApplication3\WebApplication3\Pages\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "3d5eceb1e7eb522013bdb968bbf03196e6b42735"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(WebApplication3.Pages.Pages_Index), @"mvc.1.0.razor-page", @"/Pages/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure.RazorPageAttribute(@"/Pages/Index.cshtml", typeof(WebApplication3.Pages.Pages_Index), null)]
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
#line 1 "C:\Users\mayra.ruiz\OneDrive - Epicor\Documents\grid\WebApplication3\WebApplication3\Pages\_ViewImports.cshtml"
using WebApplication3;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"3d5eceb1e7eb522013bdb968bbf03196e6b42735", @"/Pages/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"3c0aa44830bef36841a062868044c1fc5e79428b", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Index : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
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
#line 3 "C:\Users\mayra.ruiz\OneDrive - Epicor\Documents\grid\WebApplication3\WebApplication3\Pages\Index.cshtml"
  
    ViewData["Title"] = "Home page";

#line default
#line hidden
            BeginContext(71, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(73, 1308, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "ed73facc0e914cdaac0d31e8c8d7b0db", async() => {
                BeginContext(79, 1295, true);
                WriteLiteral(@"
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
                    <button type=""button"" class=""btn btn-secondary"" data-dismiss=""modal"">Close</button>
   ");
                WriteLiteral(@"                 <button type=""button"" class=""btn btn-primary"" onclick=""createSquare()"">Create</button>
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
            BeginContext(1381, 8446, true);
            WriteLiteral(@"


<script>

    var canvasElementId = 'example';

    // Size of each grid cell in pixels.
    var gridSize = 20;
    // Create Canvas
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
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

        var width = document.getElementById(""lengthFT"").value * gridSize + (document.getElementById(""lengthIN"").value / 12 * gridSize);
        var height = document.getElementById(""widthIN"").value * gridSize;
        x = Math.floor(x / width) * width;
        y = Math.floor(y / height) * height;

        var sq = document.createElement('div');
        sq.style.position = ""absolute"";
        sq.style.width = width + 'px';
        sq.style.height = height + 'px';
        sq.style.transform = 'tr");
            WriteLiteral(@"anslate(' + x + 'px,' + y + 'px)';
        sq.style.backgroundColor = 'rgba(72,132,192,1)';

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
            var start = gridSize * x;
            ctx.moveTo(start, 0);
 ");
            WriteLiteral(@"           ctx.lineTo(start, h);
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
        document.body.appendChild(canvas);
        return canvas;
    }
</script>

<!--

            <div id=""myCarousel"" class=""carousel slide"" data-ride=""carousel"" data-interval=""6000"">
                <ol class=""carousel-indicators"">
                    <li data-target=""#myCarousel"" data-slide-to=""0"" class=""active""></li>
                    <li data-target=""#myCarousel"" data-slide-to=""1""></li>
                    <li data-target=""#myCarousel"" data-slide-to=""2""></li>
                </ol>
                <div class=""carousel-inner"" role=""listbox"">
                    <div class=""item");
            WriteLiteral(@" active"">
                        <img src=""~/images/banner1.svg"" alt=""ASP.NET"" class=""img-responsive"" />
                        <div class=""carousel-caption"" role=""option"">
                            <p>
                                Learn how to build ASP.NET apps that can run anywhere.
                                <a class=""btn btn-default"" href=""https://go.microsoft.com/fwlink/?LinkID=525028&clcid=0x409"">
                                    Learn More
                                </a>
                            </p>
                        </div>
                    </div>
                    <div class=""item"">
                        <img src=""~/images/banner2.svg"" alt=""Visual Studio"" class=""img-responsive"" />
                        <div class=""carousel-caption"" role=""option"">
                            <p>
                                There are powerful new features in Visual Studio for building modern web apps.
                                <a class=""btn btn-default"" h");
            WriteLiteral(@"ref=""https://go.microsoft.com/fwlink/?LinkID=525030&clcid=0x409"">
                                    Learn More
                                </a>
                            </p>
                        </div>
                    </div>
                    <div class=""item"">
                        <img src=""~/images/banner3.svg"" alt=""Microsoft Azure"" class=""img-responsive"" />
                        <div class=""carousel-caption"" role=""option"">
                            <p>
                                Learn how Microsoft's Azure cloud platform allows you to build, deploy, and scale web apps.
                                <a class=""btn btn-default"" href=""https://go.microsoft.com/fwlink/?LinkID=525027&clcid=0x409"">
                                    Learn More
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <a class=""left carousel-control"" href=""#myCarousel"" role=");
            WriteLiteral(@"""button"" data-slide=""prev"">
                    <span class=""glyphicon glyphicon-chevron-left"" aria-hidden=""true""></span>
                    <span class=""sr-only"">Previous</span>
                </a>
                <a class=""right carousel-control"" href=""#myCarousel"" role=""button"" data-slide=""next"">
                    <span class=""glyphicon glyphicon-chevron-right"" aria-hidden=""true""></span>
                    <span class=""sr-only"">Next</span>
                </a>
            </div>

            <div class=""row"">
                <div class=""col-md-3"">
                    <h2>Application uses</h2>
                    <ul>
                        <li>Sample pages using ASP.NET Core Razor Pages</li>
                        <li>Theming using <a href=""https://go.microsoft.com/fwlink/?LinkID=398939"">Bootstrap</a></li>
                    </ul>
                </div>
                <div class=""col-md-3"">
                    <h2>How to</h2>
                    <ul>
                        <l");
            WriteLiteral(@"i><a href=""https://go.microsoft.com/fwlink/?linkid=852130"">Working with Razor Pages.</a></li>
                        <li><a href=""https://go.microsoft.com/fwlink/?LinkId=699315"">Manage User Secrets using Secret Manager.</a></li>
                        <li><a href=""https://go.microsoft.com/fwlink/?LinkId=699316"">Use logging to log a message.</a></li>
                        <li><a href=""https://go.microsoft.com/fwlink/?LinkId=699317"">Add packages using NuGet.</a></li>
                        <li><a href=""https://go.microsoft.com/fwlink/?LinkId=699319"">Target development, staging or production environment.</a></li>
                    </ul>
                </div>
                <div class=""col-md-3"">
                    <h2>Overview</h2>
                    <ul>
                        <li><a href=""https://go.microsoft.com/fwlink/?LinkId=518008"">Conceptual overview of what is ASP.NET Core</a></li>
                        <li><a href=""https://go.microsoft.com/fwlink/?LinkId=699320"">Fundamentals of ");
            WriteLiteral(@"ASP.NET Core such as Startup and middleware.</a></li>
                        <li><a href=""https://go.microsoft.com/fwlink/?LinkId=398602"">Working with Data</a></li>
                        <li><a href=""https://go.microsoft.com/fwlink/?LinkId=398603"">Security</a></li>
                        <li><a href=""https://go.microsoft.com/fwlink/?LinkID=699321"">Client side development</a></li>
                        <li><a href=""https://go.microsoft.com/fwlink/?LinkID=699322"">Develop on different platforms</a></li>
                        <li><a href=""https://go.microsoft.com/fwlink/?LinkID=699323"">Read more on the documentation site</a></li>
                    </ul>
                </div>
                <div class=""col-md-3"">
                    <h2>Run &amp; Deploy</h2>
                    <ul>
                        <li><a href=""https://go.microsoft.com/fwlink/?LinkID=517851"">Run your app</a></li>
                        <li><a href=""https://go.microsoft.com/fwlink/?LinkID=517853"">Run tools such as E");
            WriteLiteral("F migrations and more</a></li>\r\n                        <li><a href=\"https://go.microsoft.com/fwlink/?LinkID=398609\">Publish to Microsoft Azure App Service</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            -->\r\n");
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
