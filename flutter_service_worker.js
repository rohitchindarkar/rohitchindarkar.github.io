    - name: Inject custom turtle_service_worker.js
      run: |
        sed -i -e '1h;2,$H;$!d;g' -e "s/self\..*//" ./build/web/flutter_service_worker.js
        cat ./web/turtle_service_worker.js >> ./build/web/flutter_service_worker.js