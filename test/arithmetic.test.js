describe('Additional Arithmetic Tests', function () {
    describe('Validation - additional', function () {
        it('rejects missing operand2', function (done) {
            request.get('/arithmetic?operation=add&operand1=21')
                .expect(400)
                .end(function (err, res) {
                    if (err) return done(err);
                    expect(res.body).to.eql({ error: "Invalid operand2: undefined" });
                    done();
                });
        });

        it('rejects operand2 with invalid sign', function (done) {
            request.get('/arithmetic?operation=add&operand1=4&operand2=4.2-1')
                .expect(400)
                .end(function (err, res) {
                    if (err) return done(err);
                    expect(res.body).to.eql({ error: "Invalid operand2: 4.2-1" });
                    done();
                });
        });

        it('accepts operands with leading plus sign', function (done) {
            request.get('/arithmetic?operation=add&operand1=+21&operand2=+21')
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    expect(res.body).to.eql({ result: 42 });
                    done();
                });
        });
    });

    describe('Power - additional', function () {
        it('handles negative base with even exponent', function (done) {
            request.get('/arithmetic?operation=power&operand1=-2&operand2=2')
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    expect(res.body).to.eql({ result: 4 });
                    done();
                });
        });

        it('handles zero base with positive exponent', function (done) {
            request.get('/arithmetic?operation=power&operand1=0&operand2=5')
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    expect(res.body).to.eql({ result: 0 });
                    done();
                });
        });
    });

    describe('Addition - floating rounding', function () {
        it('adds 0.1 and 0.2 (floating point behavior)', function (done) {
            request.get('/arithmetic?operation=add&operand1=0.1&operand2=0.2')
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    expect(res.body).to.eql({ result: 0.30000000000000004 });
                    done();
                });
        });
    });

    describe('Division - additional', function () {
        it('divides 1 by 3 producing recurring decimal', function (done) {
            request.get('/arithmetic?operation=divide&operand1=1&operand2=3')
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    expect(res.body).to.eql({ result: 0.3333333333333333 });
                    done();
                });
        });

        it('divides using exponential notation operands', function (done) {
            request.get('/arithmetic?operation=divide&operand1=1e3&operand2=2e2')
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    expect(res.body).to.eql({ result: 5 });
                    done();
                });
        });
    });

    describe('Multiplication - additional', function () {
        it('multiplies a positive with leading plus and exponential notation', function (done) {
            request.get('/arithmetic?operation=multiply&operand1=+4.2e1&operand2=+1e0')
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    expect(res.body).to.eql({ result: 42 });
                    done();
                });
        });

        it('multiplies .5 with 2 to get 1', function (done) {
            request.get('/arithmetic?operation=multiply&operand1=.5&operand2=2')
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    expect(res.body).to.eql({ result: 1 });
                    done();
                });
        });
    });
});
